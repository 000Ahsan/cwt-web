import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { Project } from '../../core/models/project.model';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import * as L from 'leaflet';
import Swal from 'sweetalert2';
import { environment } from '../../../../public/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { CATEGORIES_LIST } from '../../core/models/category.model';

@Component({
  selector: 'app-contractor-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb, LeafletModule, NgSelectModule],
  templateUrl: './projects.component.html',
  styles: [`
    .project-map {
      height: 300px;
      width: 100%;
      border-radius: 8px;
      margin-top: 10px;
    }
    .logo-preview {
      width: 100px;
      height: 100px;
      object-fit: contain;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 10px;
    }
  `]
})
export class ContractorProjectsComponent implements OnInit {
  private contractorService = inject(ContractorService);
  private toastr = inject(ToastrService);

  @ViewChild('logoInput') logoInput!: ElementRef;

  apiUrl = environment.apiBaseUrl;
  projects: Project[] = [];
  categoriesList = CATEGORIES_LIST;
  showModal = false;
  isEditing = false;

  editingProject: Partial<Project> & { selectedCategories?: string[] } = {
    name: '',
    description: '',
    startDate: '',
    logo: '',
    latitude: 40.7128,
    longitude: -74.006,
    selectedCategories: []
  };

  searchQuery = '';

  // Map settings
  map: L.Map;
  marker: L.Marker;
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'OpenStreetMap'
      })
    ],
    zoom: 13,
    center: L.latLng(40.7128, -74.006)
  };

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.contractorService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  openCreateModal() {
    this.isEditing = false;
    this.editingProject = {
      name: '',
      description: '',
      startDate: new Date().toISOString().split('T')[0],
      logo: '',
      latitude: 40.7128,
      longitude: -74.006,
      selectedCategories: []
    };
    this.searchQuery = '';
    this.showModal = true;
    setTimeout(() => this.initMap(), 100);
  }

  openEditModal(project: Project) {
    this.isEditing = true;
    this.editingProject = {
      ...project,
      selectedCategories: project.categories ? project.categories.split(',') : []
    };
    if (this.editingProject.startDate) {
      this.editingProject.startDate = new Date(this.editingProject.startDate).toISOString().split('T')[0];
    }
    if (this.editingProject.logo) {
      const relativePath = this.editingProject.logo;
      this.editingProject.logo = this.apiUrl + relativePath;

      // Patch the file input name
      setTimeout(() => {
        if (this.logoInput) {
          fetch(this.editingProject.logo!)
            .then(res => res.blob())
            .then(blob => {
              const fileName = relativePath.split('/').pop() || 'project-logo.png';
              const file = new File([blob], fileName, { type: blob.type });
              const dt = new DataTransfer();
              dt.items.add(file);
              this.logoInput.nativeElement.files = dt.files;
            })
            .catch(err => console.error('Error patching logo file:', err));
        }
      }, 100);
    }
    this.searchQuery = '';
    this.showModal = true;
    setTimeout(() => this.initMap(), 100);
  }

  initMap() {
    if (this.map) {
      this.map.remove();
    }

    const lat = this.editingProject.latitude || 40.7128;
    const lng = this.editingProject.longitude || -74.006;

    this.map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.marker = L.marker([lat, lng], { draggable: true }).addTo(this.map);

    this.marker.on('dragend', () => {
      const position = this.marker.getLatLng();
      this.editingProject.latitude = position.lat;
      this.editingProject.longitude = position.lng;
    });

    this.map.on('click', (e: any) => {
      this.marker.setLatLng(e.latlng);
      this.editingProject.latitude = e.latlng.lat;
      this.editingProject.longitude = e.latlng.lng;
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.editingProject.logo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeLogo() {
    this.editingProject.logo = '';
    if (this.logoInput) {
      this.logoInput.nativeElement.value = '';
    }
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        this.updateMapLocation(lat, lng);
      }, (error) => {
        this.toastr.error('Could not get your location');
      });
    } else {
      this.toastr.error('Geolocation is not supported by your browser');
    }
  }

  searchLocation() {
    if (!this.searchQuery) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(this.searchQuery)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const result = data[0];
          this.updateMapLocation(parseFloat(result.lat), parseFloat(result.lon));
        } else {
          this.toastr.warning('Location not found');
        }
      })
      .catch(() => {
        this.toastr.error('Failed to search location');
      });
  }

  private updateMapLocation(lat: number, lng: number) {
    this.editingProject.latitude = lat;
    this.editingProject.longitude = lng;
    if (this.map && this.marker) {
      this.marker.setLatLng([lat, lng]);
      this.map.setView([lat, lng], 13);
    }
  }

  saveProject() {
    if (!this.editingProject.name) return;

    const payload = { ...this.editingProject };
    // Convert selectedCategories back to comma separated string
    payload.categories = this.editingProject.selectedCategories ? this.editingProject.selectedCategories.join(',') : '';
    delete (payload as any).selectedCategories;

    // Set endDate as null as requested for now
    (payload as any).endDate = null;

    if (this.isEditing) {
      // Only send logo if it's a new base64 string
      if (payload.logo && !payload.logo.startsWith('data:')) {
        delete payload.logo;
      }

      if (this.editingProject.id) {
        this.contractorService.updateProject(this.editingProject.id, payload).subscribe(() => {
          this.finishSave('Project updated successfully');
        });
      }
    } else {
      this.contractorService.createProject(payload).subscribe(() => {
        this.finishSave('Project created successfully');
      });
    }
  }

  deleteProject(id: string) {
    Swal.fire({
      title: 'DELETE PROJECT?',
      text: "Once deleted, you will not be able to recover this project!",
      icon: 'warning',
      width: '400px',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contractorService.deleteProject(id).subscribe({
          next: () => {
            this.toastr.success('Project has been deleted.');
            this.loadProjects();
          },
          error: () => {
            this.toastr.error('Failed to delete project.');
          }
        });
      }
    });
  }

  private finishSave(message: string) {
    this.toastr.success(message);
    this.showModal = false;
    this.loadProjects();
  }

  closeModal() {
    this.showModal = false;
  }
}
