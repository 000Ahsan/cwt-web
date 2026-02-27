import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from '../../core/services/worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-session',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './session.component.html',
  styles: [`
    .display-4 { font-weight: 600; }
  `]
})
export class WorkerSessionComponent implements OnInit {
  private workerService = inject(WorkerService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  activeSession: any = null;
  elapsedTime: string = '00:00:00';
  timerHandle: any;

  logForm: FormGroup;
  selectedFiles: File[] = [];
  photoPreviews: string[] = [];
  uploading: boolean = false;

  constructor() {
    this.logForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.checkActiveSession();
  }

  checkActiveSession() {
    // In a real app, this might come from the backend or local storage
    const savedSession = localStorage.getItem('active_session');
    if (savedSession) {
      this.activeSession = JSON.parse(savedSession);
      this.startTimer();
    }
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

  goToProjects() {
    this.router.navigate(['/worker/projects']);
  }

  endSession() {
    if (confirm('Are you sure you want to end your session?')) {
      this.workerService.endSession(this.activeSession.id).subscribe(() => {
        localStorage.removeItem('active_session');
        this.activeSession = null;
        clearInterval(this.timerHandle);
        this.router.navigate(['/worker/history']);
      });
    }
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
        this.uploading = false;
        this.logForm.reset();
        this.selectedFiles = [];
        this.photoPreviews = [];
        alert('Work log submitted successfully!');
      },
      error: () => {
        this.uploading = false;
        alert('Failed to submit work log.');
      }
    });
  }
}
