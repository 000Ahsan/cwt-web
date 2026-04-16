import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { ToastrService } from 'ngx-toastr';
import { ContractorService } from '../../core/services/contractor.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../public/environments/environment';
import { CurrencyService } from '../../core/services/currency.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  public currencyService = inject(CurrencyService);

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
    status: '',
    startDate: '',
    endDate: ''
  };

  billingRecords: any[] = [];
  workers: any[] = [];
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

  private _showDetailsModal = false;
  get showDetailsModal() { return this._showDetailsModal; }
  set showDetailsModal(value: boolean) {
    this._showDetailsModal = value;
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
  selectedBilling: any = null;
  loadingDetails = false;
  generating = false;
  previewing = false;

  ngOnInit() {
    this.loadFilterData();
    this.loadStats();
    this.loadData();
  }

  loadFilterData() {
    this.contractorService.getWorkers().subscribe(w => this.workers = w);
  }

  loadStats() {
    this.loadingStats = true;

    const cleanFilters: any = {};
    for (const [key, value] of Object.entries(this.filters)) {
      if (value) cleanFilters[key] = value;
    }

    this.http.get<any>(`${this.apiUrl}/billing/stats`, { params: cleanFilters }).subscribe({
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
    this.loadStats();
  }

  clearFilters() {
    this.filters = {
      workerId: '',
      status: '',
      startDate: '',
      endDate: ''
    };
    this.loadData();
    this.loadStats();
  }

  viewDetails(record: any) {
    this.selectedBilling = null;
    this.showDetailsModal = true;
    this.loadingDetails = true;
    this.http.get<any>(`${this.apiUrl}/billing/${record.id}/details`).subscribe({
      next: (data) => {
        this.selectedBilling = data;
        this.loadingDetails = false;
      },
      error: (err) => {
        this.toastr.error(err.error?.message || 'Failed to load details');
        this.showDetailsModal = false;
        this.loadingDetails = false;
      }
    });
  }

  markPaid(record: any) {
    Swal.fire({
      title: 'Mark as Paid?',
      text: `Are you sure you want to mark this amount of ${this.currencyService.getSymbol()}${(record.grandTotal || record.amount).toFixed(2)} as paid?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, mark paid'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.patch(`${this.apiUrl}/billing/${record.id}/pay`, {}).subscribe({
          next: () => {
            this.toastr.success('Billing marked as paid!');
            if (this.selectedBilling && this.selectedBilling.id === record.id) {
              this.selectedBilling.status = 'PAID';
              this.selectedBilling.paidAt = new Date().toISOString();
            }
            this.loadData();
            this.loadStats();
          },
          error: (err) => this.toastr.error(err.error?.message || 'Failed to mark as paid')
        });
      }
    });
  }

  deleteBilling(record: any) {
    Swal.fire({
      title: 'Delete Billing?',
      text: 'Are you sure you want to delete this billing record? Associated work logs will be unbilled.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/billing/${record.id}`).subscribe({
          next: () => {
            this.toastr.success('Billing record deleted!');
            this.showDetailsModal = false;
            this.loadData();
            this.loadStats();
          },
          error: (err) => this.toastr.error(err.error?.message || 'Failed to delete billing')
        });
      }
    });
  }

  async exportToPDF() {
    const data = document.getElementById('printableInvoice');
    if (!data || !this.selectedBilling) return;

    this.loadingDetails = true;
    try {
      // Create canvas from the invoice element
      const canvas = await html2canvas(data, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if content is longer than A4
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const dateStr = new Date(this.selectedBilling.date).toISOString().split('T')[0];
      const filename = `Payslip_${this.selectedBilling.worker.name.replace(/\s+/g, '_')}_${dateStr}.pdf`;
      
      // Open in new tab for the user to view/print
      const blob = pdf.output('bloburl');
      window.open(blob, '_blank');
      
      this.toastr.success('PDF generated successfully');
    } catch (error) {
      console.error('PDF Error:', error);
      this.toastr.error('Failed to generate PDF');
    } finally {
      this.loadingDetails = false;
    }
  }

  printInvoice() {
    this.exportToPDF();
  }

  openGenerateModal() {
    this.showGenerateModal = true;
    this.previewData = null;
    this.generateParams = { workerId: '', startDate: '', endDate: '' };
  }

  closeModal() {
    this.showGenerateModal = false;
    this.showDetailsModal = false;
    this.previewData = null;
    this.selectedBilling = null;
  }

  getPreview() {
    if (!this.generateParams.workerId || !this.generateParams.startDate || !this.generateParams.endDate) {
      this.toastr.warning('Please fill all fields');
      return;
    }

    this.previewing = true;
    this.http.post<any>(`${this.apiUrl}/billing/preview-batch`, this.generateParams).subscribe({
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
    if (!this.previewData || this.previewData.totalPayable <= 0) {
      this.toastr.warning('No billable hours available.');
      return;
    }

    this.generating = true;
    this.http.post(`${this.apiUrl}/billing/generate-batch`, this.generateParams).subscribe({
      next: () => {
        this.toastr.success('Billing generated successfully!');
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
      status: '',
      startDate: '',
      endDate: ''
    };
    this.loadData();
    this.loadStats();
  }
}
