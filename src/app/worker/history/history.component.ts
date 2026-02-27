import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerService } from '../../core/services/worker.service';

@Component({
  selector: 'app-worker-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styles: []
})
export class WorkerHistoryComponent implements OnInit {
  private workerService = inject(WorkerService);
  history: any[] = [];

  ngOnInit() {
    this.workerService.getWorkHistory().subscribe(data => {
      this.history = data;
    });
  }

  calculateDuration(start: string, end: string): string {
    if (!start || !end) return '0h';
    const s = new Date(start).getTime();
    const e = new Date(end).getTime();
    const diff = e - s;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    return `${h}h ${m}m`;
  }
}
