import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from '../../core/services/worker.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { environment } from '../../../../public/environments/environment.prod';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-worker-logs',
  standalone: true,
  imports: [CommonModule, Breadcrumb, FeatherIcons],
  templateUrl: './logs.component.html',
  styles: []
})
export class WorkerLogsComponent implements OnInit {
  private workerService = inject(WorkerService);
  logs: any[] = [];
  apiUrl = environment.apiBaseUrl;
  token = localStorage.getItem('access_token');

  ngOnInit() {
    this.workerService.getWorkerLogs().subscribe(data => {
      this.logs = data;
    });
  }

  formatDuration(minutes: number): string {
    if (!minutes) return '0m';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  }
}
