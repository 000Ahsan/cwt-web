import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-contractor-workers',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb],
  templateUrl: './workers.component.html',
  styles: []
})
export class ContractorWorkersComponent implements OnInit {
  private contractorService = inject(ContractorService);

  showCreateModal = false;
  editingWorker: any = null;
  workers: any[] = [];
  projects: any[] = [];

  newWorker = { email: '', name: '', password: '' };

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.contractorService.getWorkers().subscribe(workers => {
      this.workers = workers.map(w => ({ ...w, selectedProjectId: '' }));
    });
    this.contractorService.getProjects().subscribe(projects => this.projects = projects);
  }

  saveWorker() {
    if (!this.newWorker.email || !this.newWorker.name) return;

    if (this.editingWorker) {
      this.contractorService.updateWorker({ ...this.newWorker }).subscribe(() => {
        this.closeModal();
        this.loadData();
      });
    } else {
      this.contractorService.createWorker(this.newWorker).subscribe(() => {
        this.closeModal();
        this.loadData();
      });
    }
  }

  editWorker(worker: any) {
    this.editingWorker = worker;
    this.newWorker = { email: worker.email, name: worker.name, password: '' };
    this.showCreateModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
    this.editingWorker = null;
    this.newWorker = { email: '', name: '', password: '' };
  }

  assignWorker(worker: any) {
    if (!worker.selectedProjectId) return;

    this.contractorService.assignWorkerToProject(worker.selectedProjectId, worker.id).subscribe(() => {
      alert(`Worker assigned successfully!`);
      this.loadData();
    });
  }
}
