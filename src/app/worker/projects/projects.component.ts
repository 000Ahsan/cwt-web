import { Component, OnInit, inject, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WorkerService } from '../../core/services/worker.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { environment } from '../../../../public/environments/environment';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-worker-projects',
  standalone: true,
  imports: [CommonModule, Breadcrumb, FormsModule, ReactiveFormsModule, FeatherIcons],
  templateUrl: './projects.component.html',
  styles: `
    .product-img img {
      height: 250px;
      width: 100%;
      object-fit: cover;
    }
    .timer-display {
      font-size: 1.8rem;
      font-weight: 700;
      margin: 10px 0;
    }
    .img-thumbnail {
      height: 100px;
      width: 100px;
      object-fit: cover;
    }
  `
})
export class WorkerProjectsComponent implements OnInit, OnDestroy {
  private workerService = inject(WorkerService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private modalService = inject(NgbModal);

  projects: any[] = [];
  apiUrl = environment.apiBaseUrl;

  activeSession: any = null;
  elapsedTime: string = '00:00:00';
  timerHandle: any;

  logForm: FormGroup;
  selectedFiles: File[] = [];
  photoPreviews: string[] = [];
  uploading: boolean = false;

  @ViewChild('logModal') logModal: TemplateRef<any>;
  private modalRef: NgbModalRef;

  constructor() {
    this.logForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(100)]]
    });
  }

  ngOnInit() {
    this.loadProjects();
    this.checkActiveSession();
  }

  ngOnDestroy() {
    if (this.timerHandle) clearInterval(this.timerHandle);
  }

  loadProjects() {
    this.workerService.getAssignedProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  checkActiveSession() {
    const savedSession = localStorage.getItem('active_session');
    if (savedSession) {
      this.activeSession = JSON.parse(savedSession);
      this.startTimer();
    }
  }

  startSession(project: any) {
    if (this.activeSession) return;

    if (!navigator.geolocation) {
      Swal.fire('Error', 'Geolocation is not supported by your browser', 'error');
      return;
    }

    Swal.fire({
      title: 'Verifying Location...',
      text: 'Please wait while we match your location with the project location.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const projectLat = project.latitude;
        const projectLng = project.longitude;

        const distance = this.calculateDistance(userLat, userLng, projectLat, projectLng);

        Swal.close();

        // 100m diameter = 50m radius
        if (distance > 50) {
          Swal.fire('Location Mismatch', 'You are not in the project location. Please be within 100m diameter of the project.', 'warning');
          return;
        }

        this.workerService.startSession(project.id).subscribe({
          next: (session) => {
            this.activeSession = {
              ...session,
              projectName: project.name,
              startTime: new Date().toISOString(),
              projectId: project.id
            };
            localStorage.setItem('active_session', JSON.stringify(this.activeSession));
            this.startTimer();
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Access Denied',
              text: err.error?.message || 'Failed to start session. Please try again.',
              confirmButtonColor: '#7366ff'
            });
          }
        });
      },
      (error) => {
        Swal.close();
        Swal.fire('Error', 'Could not get your location. Please enable location services.', 'error');
      }
    );
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371e3; // Earth radius in meters
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  }

  startTimer() {
    if (this.timerHandle) clearInterval(this.timerHandle);
    this.timerHandle = setInterval(() => {
      const start = new Date(this.activeSession.startTime).getTime();
      const now = new Date().getTime();
      const diff = now - start;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      this.elapsedTime = `${this.pad(h)}:${this.pad(m)}:${this.pad(s)}`;
    }, 1000);
  }

  pad(n: number) {
    return n < 10 ? '0' + n : n;
  }

  stopSession() {
    Swal.fire({
      title: 'Stop Work Session?',
      text: "Are you sure you want to stop the timer?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, stop'
    }).then((result) => {
      if (result.isConfirmed) {
        clearInterval(this.timerHandle);
        this.openLogModal();
      }
    });
  }

  openLogModal() {
    this.modalRef = this.modalService.open(this.logModal, {
      backdrop: 'static',
      keyboard: false,
      centered: true,
      size: 'lg'
    });
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.selectedFiles.push(files[i]);
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.photoPreviews.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  discardSession() {
    Swal.fire({
      title: 'Discard Time?',
      text: "This will discard your tracked time and it will not be saved in the database.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, discard',
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.workerService.discardActiveSession().subscribe({
          next: () => {
            Swal.fire('Discarded', 'Session discarded successfully', 'success');
            this.clearSession();
            this.modalRef.close();
          },
          error: (err) => {
            Swal.fire('Error', err.error?.message || 'Failed to discard session', 'error');
            this.clearSession();
            this.modalRef.close();
          }
        });
      }
    });
  }

  submitLog() {
    if (this.logForm.invalid) return;

    this.uploading = true;
    const formData = new FormData();
    formData.append('description', this.logForm.value.description);
    formData.append('sessionId', this.activeSession.id);

    this.selectedFiles.forEach(file => {
      formData.append('photos', file);
    });

    this.workerService.submitWorkLog(formData).subscribe({
      next: () => {
        this.workerService.endSession(this.activeSession.id).subscribe({
          next: () => {
            this.uploading = false;
            Swal.fire('Success', 'Work session logged successfully!', 'success');
            this.clearSession();
            this.modalRef.close();
          },
          error: () => {
            this.uploading = false;
            Swal.fire('Error', 'Work log submitted, but failed to end session.', 'error');
            this.clearSession();
            this.modalRef.close();
          }
        });
      },
      error: () => {
        this.uploading = false;
        Swal.fire('Error', 'Failed to submit work log. Please try again.', 'error');
      }
    });
  }

  clearSession() {
    localStorage.removeItem('active_session');
    this.activeSession = null;
    this.elapsedTime = '00:00:00';
    this.logForm.reset();
    this.selectedFiles = [];
    this.photoPreviews = [];
  }
}

