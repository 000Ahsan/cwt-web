import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contractor-workers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workers.component.html',
  styles: []
})
export class ContractorWorkersComponent implements OnInit {
  private contractorService = inject(ContractorService);

  workers: any[] = [];
  projects: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.contractorService.getWorkers().subscribe(workers => this.workers = workers);
    this.contractorService.getProjects().subscribe(projects => this.projects = projects);
  }

  assignWorker(worker: any) {
    if (!worker.selectedProjectId) return;

    this.contractorService.assignWorkerToProject(worker.selectedProjectId, worker.id).subscribe(() => {
      alert(`Worker assigned successfully!`);
      this.loadData();
    });
  }
}
