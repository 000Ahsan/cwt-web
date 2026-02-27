import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WorkerService } from '../../core/services/worker.service';

@Component({
  selector: 'app-worker-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styles: []
})
export class WorkerProjectsComponent implements OnInit {
  private workerService = inject(WorkerService);
  private router = inject(Router);
  projects: any[] = [];

  ngOnInit() {
    this.workerService.getAssignedProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  startSession(projectId: number) {
    this.workerService.startSession(projectId).subscribe(session => {
      const project = this.projects.find(p => p.id === projectId);
      const sessionData = {
        ...session,
        projectName: project?.name || 'Unknown Project',
        startTime: new Date().toISOString()
      };
      localStorage.setItem('active_session', JSON.stringify(sessionData));
      this.router.navigate(['/worker/session']);
    });
  }
}
