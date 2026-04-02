import { Component, OnInit, inject, ViewChild, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { environment } from '../../../../public/environments/environment';
import { NgSelectModule } from '@ng-select/ng-select';
import { CATEGORIES_LIST } from '../../core/models/category.model';

@Component({
  selector: 'app-contractor-workers',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb, NgSelectModule],
  templateUrl: './workers.component.html',
  styles: [`
    .worker-avatar-preview {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #eee;
    }
    .cursor-pointer {
      cursor: pointer;
    }
  `]
})
export class ContractorWorkersComponent implements OnInit, OnDestroy {
  private contractorService = inject(ContractorService);
  private toastr = inject(ToastrService);
  private renderer = inject(Renderer2);

  @ViewChild('imageInput') imageInput!: ElementRef;

  apiUrl = environment.apiBaseUrl;
  private _showCreateModal = false;
  get showCreateModal() { return this._showCreateModal; }
  set showCreateModal(value: boolean) {
    this._showCreateModal = value;
    if (value) {
      this.renderer.addClass(document.body, 'modal-open');
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
    }
  }

  editingWorker: any = null;
  workers: any[] = [];
  projects: any[] = [];
  categoriesList = CATEGORIES_LIST;
  loading = false;
  submitting = false;

  newWorker: any = { email: '', phone: '', name: '', password: '', image: '', selectedCategories: [] };

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  loadData() {
    this.loading = true;
    this.contractorService.getWorkers().subscribe({
      next: (workers) => {
        this.workers = workers.map(w => ({ ...w, selectedProjectId: '', isAssigning: false }));
        // Only stop loading when projects are also loaded
      },
      error: () => this.loading = false
    });
    this.contractorService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newWorker.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.newWorker.image = '';
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }
  }

  uploadTrigger() {
    this.imageInput.nativeElement.click();
  }

  saveWorker() {
    if ((!this.newWorker.email && !this.newWorker.phone) || !this.newWorker.name) return;

    this.submitting = true;
    const payload = { ...this.newWorker };
    payload.categories = this.newWorker.selectedCategories ? this.newWorker.selectedCategories.join(',') : '';
    delete payload.selectedCategories;

    if (this.editingWorker) {
      // If editing, only send image if it's new (starts with data:)
      if (payload.image && !payload.image.startsWith('data:')) {
        delete (payload as any).image;
      }
      if (payload.password === '') {
        delete (payload as any).password;
      }
      this.contractorService.updateWorker(payload, this.editingWorker.id).subscribe({
        next: () => {
          this.toastr.success('Worker updated successfully');
          this.closeModal();
          this.loadData();
          this.submitting = false;
        },
        error: (err) => {
          this.toastr.error(err.error?.message || 'Failed to update worker');
          this.submitting = false;
        }
      });
    } else {
      this.contractorService.createWorker(payload).subscribe({
        next: () => {
          this.toastr.success('Worker created successfully');
          this.closeModal();
          this.loadData();
          this.submitting = false;
        },
        error: (err) => {
          this.toastr.error(err.error?.message || 'Failed to create worker');
          this.submitting = false;
        }
      });
    }
  }

  editWorker(worker: any) {
    this.editingWorker = worker;
    this.newWorker = {
      email: worker.email,
      phone: worker.phone,
      name: worker.name,
      password: '',
      image: worker.image ? worker.image : '',
      selectedCategories: worker.categories ? worker.categories.split(',') : []
    };

    // Patch the file input name if we have an image
    if (worker.image) {
      setTimeout(() => {
        if (this.imageInput) {
          fetch(this.newWorker.image)
            .then(res => res.blob())
            .then(blob => {
              const fileName = worker.image.split('/').pop();
              const file = new File([blob], fileName, { type: blob.type });
              const dt = new DataTransfer();
              dt.items.add(file);
              this.imageInput.nativeElement.files = dt.files;
            })
            .catch(err => console.error('Error patching worker image:', err));
        }
      }, 100);
    }

    this.showCreateModal = true;
  }

  deleteWorker(worker: any) {
    Swal.fire({
      title: 'Delete Worker?',
      text: `Are you sure you want to delete ${worker.name}? Once deleted, you will not be able to recover this worker record!`,
      icon: 'warning',
      width: '400px',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contractorService.deleteWorker(worker.id).subscribe({
          next: () => {
            this.toastr.success('Worker deleted successfully');
            this.loadData();
          },
          error: (err) => this.toastr.error(err.error?.message || 'Failed to delete worker')
        });
      }
    });
  }

  closeModal() {
    this.showCreateModal = false;
    this.editingWorker = null;
    this.newWorker = { email: '', phone: '', name: '', password: '', image: '', selectedCategories: [] };
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }
  }

  assignWorker(worker: any) {
    if (!worker.selectedProjectId) return;

    worker.isAssigning = true;
    this.contractorService.assignWorkerToProject(worker.selectedProjectId, worker.id).subscribe({
      next: () => {
        this.toastr.success(`Project assigned to worker successfully!`);
        this.loadData();
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Failed to assign project');
        worker.isAssigning = false;
      }
    });
  }

  getUnassignedProjects(worker: any): any[] {
    const assignments = worker.assignments;
    const assignedProjectIds = assignments.map((assignment: any) => assignment.projectId);
    return this.projects.filter((p: any) => !assignedProjectIds.includes(p.id));
  }
}
