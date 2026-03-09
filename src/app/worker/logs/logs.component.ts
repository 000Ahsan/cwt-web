import { Component, OnInit, inject, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from '../../core/services/worker.service';
import { AuthService } from '../../core/services/auth.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { environment } from '../../../../public/environments/environment';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-worker-logs',
  standalone: true,
  imports: [CommonModule, Breadcrumb, FeatherIcons],
  templateUrl: './logs.component.html',
  styles: [`
    .text-truncate-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class WorkerLogsComponent implements OnInit {
  private workerService = inject(WorkerService);
  private authService = inject(AuthService);
  private modalService = inject(NgbModal);

  logs: any[] = [];
  apiUrl = environment.apiBaseUrl;
  token = localStorage.getItem('access_token');
  selectedLog: any = null;
  userName = this.authService.currentUserValue?.name;

  @ViewChild('detailsModal') detailsModal: TemplateRef<any>;

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

  viewLog(log: any) {
    this.selectedLog = log;
    this.modalService.open(this.detailsModal, {
      centered: true,
      size: 'lg',
      scrollable: true
    });
  }
}
