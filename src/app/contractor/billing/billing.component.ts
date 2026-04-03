import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { ToastrService } from 'ngx-toastr';
import { ContractorService } from '../../core/services/contractor.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../public/environments/environment';

@Component({
  selector: 'app-contractor-billing',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb],
  templateUrl: './billing.component.html',
})
export class BillingComponent implements OnInit {
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);
  private renderer = inject(Renderer2);
  private contractorService = inject(ContractorService);

  apiUrl = environment.apiBaseUrl;

  // Stats
  stats = {
    totalDue: 0,
    totalPaid: 0,
    totalProjectBilling: 0,
    totalContractorBilling: 0
  };

  // Filters
  filters = {
    workerId: '',
    projectId: '',
    status: '',
    billingType: '',
    startDate: '',
    endDate: ''
  };

  billingRecords: any[] = [];
  workers: any[] = [];
  projects: any[] = [];
  loading = false;
  loadingStats = false;

  // Modal State
  private _showGenerateModal = false;
  get showGenerateModal() { return this._showGenerateModal; }
  set showGenerateModal(value: boolean) {
    this._showGenerateModal = value;
    if (value) {
      this.renderer.addClass(document.body, 'modal-open');
    } else {
      this.renderer.removeClass(document.body, 'modal-open');
    }
  }

  generateParams = {
    workerId: '',
    startDate: '',
    endDate: ''
  };

  previewData: any = null;
  generating = false;
  previewing = false;

  ngOnInit() {
    this.loadFilterData();
    this.loadStats();
    this.loadData();
  }

  loadFilterData() {
    this.contractorService.getWorkers().subscribe(w => this.workers = w);
    this.contractorService.getProjects().subscribe(p => this.projects = p);
  }

  loadStats() {
    this.loadingStats = true;
    this.http.get<any>(`${this.apiUrl}/billing/stats`).subscribe({
      next: (data) => {
        this.stats = data;
        this.loadingStats = false;
      },
      error: () => this.loadingStats = false
    });
  }

  loadData() {
    this.loading = true;

    // Clean filters out of empty values
    const cleanFilters: any = {};
    for (const [key, value] of Object.entries(this.filters)) {
      if (value) cleanFilters[key] = value;
    }

    this.http.get<any>(`${this.apiUrl}/billing`, { params: cleanFilters }).subscribe({
      next: (response) => {
        this.billingRecords = response.data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  applyFilters() {
    this.loadData();
  }

  clearFilters() {
    this.filters = {
      workerId: '',
      projectId: '',
      status: '',
      billingType: '',
      startDate: '',
      endDate: ''
    };
    this.loadData();
  }

  markPaid(record: any) {
    Swal.fire({
      title: 'Mark as Paid?',
      text: `Are you sure you want to mark this amount of $${record.amount} as paid?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, mark paid'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.patch(`${this.apiUrl}/billing/${record.id}/pay`, {}).subscribe({
          next: () => {
            this.toastr.success('Billing marked as paid!');
            this.loadData();
            this.loadStats();
          },
          error: (err) => this.toastr.error(err.error?.message || 'Failed to mark as paid')
        });
      }
    });
  }

  openGenerateModal() {
    this.showGenerateModal = true;
    this.previewData = null;
    this.generateParams = { workerId: '', startDate: '', endDate: '' };
  }

  closeModal() {
    this.showGenerateModal = false;
    this.previewData = null;
  }

  getPreview() {
    if (!this.generateParams.workerId || !this.generateParams.startDate || !this.generateParams.endDate) {
      this.toastr.warning('Please fill all fields');
      return;
    }

    this.previewing = true;
    this.http.post<any>(`${this.apiUrl}/billing/preview-contractor`, this.generateParams).subscribe({
      next: (data) => {
        this.previewData = data;
        this.previewing = false;
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Failed to generate preview');
        this.previewing = false;
      }
    });
  }

  generateBilling() {
    if (!this.previewData || this.previewData.contractorHours <= 0) {
      this.toastr.warning('No billable hours available.');
      return;
    }

    this.generating = true;
    this.http.post(`${this.apiUrl}/billing/generate-contractor`, this.generateParams).subscribe({
      next: () => {
        this.toastr.success('Contractor billing generated successfully!');
        this.closeModal();
        this.loadData();
        this.loadStats();
        this.generating = false;
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Failed to generate billing');
        this.generating = false;
      }
    });
  }

  resetFilters() {
    this.filters = {
      workerId: '',
      projectId: '',
      status: '',
      billingType: '',
      startDate: '',
      endDate: ''
    };
    this.loadData();
  }
}
