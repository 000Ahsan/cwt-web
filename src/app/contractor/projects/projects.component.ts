import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractorService } from '../../core/services/contractor.service';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-contractor-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb],
  templateUrl: './projects.component.html',
  styles: []
})
export class ContractorProjectsComponent implements OnInit {
  private contractorService = inject(ContractorService);
  projects: any[] = [];
  showCreateModal = false;
  newProject = { name: '', description: '' };

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.contractorService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  saveProject() {
    if (!this.newProject.name) return;
    this.contractorService.createProject(this.newProject).subscribe(() => {
      this.showCreateModal = false;
      this.newProject = { name: '', description: '' };
      this.loadProjects();
    });
  }
}
