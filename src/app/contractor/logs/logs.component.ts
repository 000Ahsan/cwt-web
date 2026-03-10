import { Component, OnInit, inject, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractorService } from '../../core/services/contractor.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';
import { environment } from '../../../../public/environments/environment';
import Swal from 'sweetalert2';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-contractor-logs',
    standalone: true,
    imports: [CommonModule, FormsModule, Breadcrumb, FeatherIcons],
    templateUrl: './logs.component.html',
    styles: [`
    .filter-card { background: #fff; }
    .page-btn { min-width: 36px; }
  `]
})
export class ContractorLogsComponent implements OnInit {
    private contractorService = inject(ContractorService);
    private modalService = inject(NgbModal);

    apiUrl = environment.apiBaseUrl;
    token = localStorage.getItem('access_token');

    // Data
    logs: any[] = [];
    workers: any[] = [];
    projects: any[] = [];

    // Pagination
    total = 0;
    page = 1;
    limit = 20;
    totalPages = 0;

    // Filters
    filters = {
        workerId: '',
        projectId: '',
        startDate: '',
        endDate: ''
    };

    loading = false;
    selectedLog: any = null;
    private modalRef: NgbModalRef;

    @ViewChild('detailsModal') detailsModal: TemplateRef<any>;

    ngOnInit() {
        this.loadFiltersData();
        this.loadLogs();
    }

    loadFiltersData() {
        this.contractorService.getWorkers().subscribe(w => this.workers = w);
        this.contractorService.getProjects().subscribe(p => this.projects = p);
    }

    loadLogs() {
        this.loading = true;
        this.contractorService.getContractorLogs({
            ...this.filters,
            page: this.page,
            limit: this.limit
        }).subscribe({
            next: (res) => {
                this.logs = res.data;
                this.total = res.total;
                this.totalPages = res.totalPages;
                this.loading = false;
            },
            error: () => { this.loading = false; }
        });
    }

    applyFilters() {
        this.page = 1;
        this.loadLogs();
    }

    clearFilters() {
        this.filters = { workerId: '', projectId: '', startDate: '', endDate: '' };
        this.page = 1;
        this.loadLogs();
    }

    goToPage(p: number) {
        if (p < 1 || p > this.totalPages) return;
        this.page = p;
        this.loadLogs();
    }

    get pageNumbers(): number[] {
        const pages: number[] = [];
        const start = Math.max(1, this.page - 2);
        const end = Math.min(this.totalPages, this.page + 2);
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    }

    formatDuration(minutes: number): string {
        if (!minutes) return '0m';
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return h > 0 ? `${h}h ${m}m` : `${m}m`;
    }

    viewLog(log: any) {
        this.selectedLog = log;
        this.modalRef = this.modalService.open(this.detailsModal, {
            centered: true,
            size: 'lg',
            scrollable: true
        });
    }

    async auditLog(log: any, status: 'APPROVED' | 'REJECTED') {
        const { value: comment } = await Swal.fire({
            title: `${status === 'APPROVED' ? 'Approve' : 'Reject'} Work Log`,
            input: 'textarea',
            inputValue: log.contractorComment || '',
            inputLabel: 'Comment (Optional)',
            inputPlaceholder: 'Enter any notes or feedback...',
            showCancelButton: true,
            confirmButtonText: status === 'APPROVED' ? 'Approve' : 'Reject',
            customClass: {
                confirmButton: status === 'APPROVED' ? 'btn btn-primary' : 'btn btn-danger',
                cancelButton: 'btn btn-light'
            },
            inputAttributes: {
                'aria-label': 'Type your comment here'
            }
        });

        if (comment !== undefined) {
            this.contractorService.signOffWorkLog(log.id, { status, comment }).subscribe({
                next: () => {
                    if (this.modalRef) {
                        this.modalRef.close();
                    } else {
                        this.modalService.dismissAll();
                    }
                    this.loadLogs();
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: `Work log ${status.toLowerCase()} successfully.`,
                        timer: 2000,
                        showConfirmButton: false
                    });
                },
                error: (err) => {
                    Swal.fire('Error', err.error?.message || 'Failed to update work log status', 'error');
                }
            });
        }
    }
}
