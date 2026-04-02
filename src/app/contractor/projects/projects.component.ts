import { Component, OnInit, inject, ViewChild, ElementRef, NgZone, Renderer2, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { Project } from '../../core/models/project.model';
import { GoogleMapsModule, GoogleMap, MapMarker } from '@angular/google-maps';
import Swal from 'sweetalert2';
import { environment } from '../../../../public/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { CATEGORIES_LIST } from '../../core/models/category.model';

@Component({
  selector: 'app-contractor-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb, GoogleMapsModule, NgSelectModule],
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
    .bg-success-light { background-color: rgba(81, 187, 37, 0.1); }
    .bg-danger-light { background-color: rgba(220, 53, 69, 0.1); }
    .table-active { background-color: rgba(var(--primary-rgb), 0.05) !important; }
    .me-n2 { margin-right: -0.5rem !important; }
    .txt-primary { color: var(--theme-deafult); }
  `]
})
export class ContractorProjectsComponent implements OnInit, OnDestroy {
  private contractorService = inject(ContractorService);
  private toastr = inject(ToastrService);
  private ngZone = inject(NgZone);
  private renderer = inject(Renderer2);

  @ViewChild('logoInput') logoInput!: ElementRef;

  apiUrl = environment.apiBaseUrl;
  projects: Project[] = [];
  categoriesList = CATEGORIES_LIST;
  private _showModal = false;
  get showModal() { return this._showModal; }
  set showModal(value: boolean) {
    this._showModal = value;
    if (value) {
      this.renderer.addClass(document.body, 'modal-open');
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
    }
  }

  isEditing = false;
  loading = false;
  submitting = false;
  expandedProjectId: string | null = null;

  editingProject: Partial<Project> & { selectedCategories?: string[] } = {
    name: '',
    description: '',
    startDate: '',
    targetHours: 0,
    address: '',
    logo: '',
    latitude: 40.7128,
    longitude: -74.006,
    isLocationBound: false,
    selectedCategories: []
  };

  searchQuery = '';

  get ngModelStartDate(): string {
    return this.editingProject.startDate || '';
  }

  set ngModelStartDate(value: string) {
    this.editingProject.startDate = value;
  }

  // Map settings
  @ViewChild(GoogleMap, { static: false }) googleMap: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    zoom: 13,
    center: { lat: 40.7128, lng: -74.006 },
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  };

  markerPosition: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.006 };
  markerOptions: google.maps.MarkerOptions = { draggable: true };

  ngOnInit() {
    this.loadProjects();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'modal-open');
  }

  loadProjects() {
    this.loading = true;
    this.contractorService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  toggleExpand(projectId: string) {
    this.expandedProjectId = this.expandedProjectId === projectId ? null : projectId;
  }

  openCreateModal() {
    this.isEditing = false;
    this.editingProject = {
      name: '',
      description: '',
      startDate: new Date().toLocaleDateString('en-CA'),
      targetHours: 0,
      address: '',
      logo: '',
      latitude: 40.7128,
      longitude: -74.006,
      isLocationBound: false,
      selectedCategories: []
    };
    this.searchQuery = '';
    this.showModal = true;
    this.getCurrentLocation();
  }

  openEditModal(project: Project) {
    this.isEditing = true;
    this.editingProject = {
      ...project,
      selectedCategories: project.categories ? project.categories.split(',') : []
    };
    if (this.editingProject.startDate) {
      this.editingProject.startDate = this.editingProject.startDate.substring(0, 10);
    }
    if (this.editingProject.logo) {
      const relativePath = this.editingProject.logo;
      this.editingProject.logo = relativePath;

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
    this.updateMarkerPosition(this.editingProject.latitude!, this.editingProject.longitude!);
  }

  private updateMarkerPosition(lat: number, lng: number, updateCenter: boolean = true) {
    this.markerPosition = { lat, lng };
    if (updateCenter) {
      this.mapOptions = { ...this.mapOptions, center: { lat, lng } };
    }
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.updateMarkerPosition(lat, lng, false); // Don't move the map center
      this.editingProject.latitude = lat;
      this.editingProject.longitude = lng;
      this.reverseGeocode(lat, lng);
    }
  }

  onMarkerDragEnd(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      this.editingProject.latitude = lat;
      this.editingProject.longitude = lng;
      this.reverseGeocode(lat, lng);
    }
  }

  reverseGeocode(lat: number, lng: number) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      this.ngZone.run(() => {
        if (status === 'OK' && results && results[0]) {
          this.editingProject.address = results[0].formatted_address;
        }
      });
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

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: this.searchQuery }, (results, status) => {
      this.ngZone.run(() => {
        if (status === 'OK' && results && results[0]) {
          const location = results[0].geometry.location;
          const lat = location.lat();
          const lng = location.lng();
          this.updateMarkerPosition(lat, lng);
          this.editingProject.latitude = lat;
          this.editingProject.longitude = lng;
          this.editingProject.address = results[0].formatted_address;
        } else {
          this.toastr.warning('Location not found');
        }
      });
    });
  }

  private updateMapLocation(lat: number, lng: number) {
    this.editingProject.latitude = lat;
    this.editingProject.longitude = lng;
    this.updateMarkerPosition(lat, lng);
    this.reverseGeocode(lat, lng);
  }

  saveProject() {
    if (!this.editingProject.name) return;

    this.submitting = true;
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
        this.contractorService.updateProject(this.editingProject.id, payload).subscribe({
          next: () => {
            this.finishSave('Project updated successfully');
            this.submitting = false;
          },
          error: (err) => {
            this.toastr.error(err.error?.message || 'Failed to update project');
            this.submitting = false;
          }
        });
      }
    } else {
      this.contractorService.createProject(payload).subscribe({
        next: () => {
          this.finishSave('Project created successfully');
          this.submitting = false;
        },
        error: (err) => {
          this.toastr.error(err.error?.message || 'Failed to create project');
          this.submitting = false;
        }
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
