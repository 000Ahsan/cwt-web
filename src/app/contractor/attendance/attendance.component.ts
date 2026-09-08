import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContractorService } from '../../core/services/contractor.service';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';

@Component({
    selector: 'app-contractor-attendance',
    standalone: true,
    imports: [CommonModule, FormsModule, Breadcrumb, FeatherIcons],
    templateUrl: './attendance.component.html',
    styles: [`
        .filter-card { background: #fff; }
        .time-chip {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        .chip-login { background: #e8f5e9; color: #2e7d32; }
        .chip-logout { background: #fce4ec; color: #c62828; }
        .chip-active { background: #fff8e1; color: #f57f17; }
        .duration-pill {
            background: rgba(var(--theme-default-rgb, 109, 0, 255), 0.1);
            color: var(--theme-default);
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
    `]
})
export class AttendanceComponent implements OnInit {
    private contractorService = inject(ContractorService);

    // Data
    records: any[] = [];
    filteredRecords: any[] = [];
    workers: any[] = [];

    // Filters
    filters = {
        workerId: '',
        startDate: '',
        endDate: ''
    };

    loading = false;

    ngOnInit() {
        this.loadWorkers();
        this.loadAttendance();
    }

    loadWorkers() {
        this.contractorService.getWorkers().subscribe(w => this.workers = w);
    }

    loadAttendance() {
        this.loading = true;
        this.contractorService.getAttendanceLogs(this.filters).subscribe({
            next: (data) => {
                this.records = data;
                this.filteredRecords = data;
                this.loading = false;
            },
            error: () => { this.loading = false; }
        });
    }

    applyFilters() {
        this.loadAttendance();
    }

    clearFilters() {
        this.filters = { workerId: '', startDate: '', endDate: '' };
        this.loadAttendance();
    }

    getInitials(name: string): string {
        if (!name) return '?';
        return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    }

    formatTime(dt: string | Date | null): string {
        if (!dt) return '—';
        return new Date(dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    formatDate(dateStr: string): string {
        if (!dateStr) return '';
        const d = new Date(dateStr + 'T00:00:00');
        return d.toLocaleDateString([], { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    }

    formatDuration(firstLogin: string, lastLogout: string | null): string {
        if (!lastLogout) return 'Still active';
        const ms = new Date(lastLogout).getTime() - new Date(firstLogin).getTime();
        const totalMin = Math.floor(ms / 60000);
        const h = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        if (h === 0) return `${m}m`;
        return `${h}h ${m}m`;
    }
}
