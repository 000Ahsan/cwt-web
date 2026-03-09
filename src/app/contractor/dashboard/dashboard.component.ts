import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/auth.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ContractorService } from '../../core/services/contractor.service';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-contractor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, Breadcrumb, SvgIconComponent, NgApexchartsModule, FeatherIcons],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class ContractorDashboardComponent implements OnInit {
  private contractorService = inject(ContractorService);
  private authService = inject(AuthService);

  public stats: any = { projectsCount: 0, workersCount: 0 };

  // Shared chart config
  private primaryColor = '#24695C';
  private secondaryColor = '#BA895D';

  // Preset filter periods
  readonly periods = [
    { key: 'today', label: 'Today' },
    { key: 'week', label: 'This Week' },
    { key: 'month', label: 'This Month' },
  ];

  projectsPeriod = 'month';
  workersPeriod = 'month';

  // Chart data
  projectsChartOptions: any = null;
  workersChartOptions: any = null;
  loadingProjects = false;
  loadingWorkers = false;

  ngOnInit() {
    this.contractorService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
    this.loadProjectsChart();
    this.loadWorkersChart();
  }

  get user(): User | null {
    return this.authService.currentUserValue;
  }

  setProjectsPeriod(key: string) {
    this.projectsPeriod = key;
    this.loadProjectsChart();
  }

  setWorkersPeriod(key: string) {
    this.workersPeriod = key;
    this.loadWorkersChart();
  }

  loadProjectsChart() {
    this.loadingProjects = true;
    const { start, end } = this.getRange(this.projectsPeriod);
    this.contractorService.getProjectsChart(start, end).subscribe({
      next: (res) => {
        this.projectsChartOptions = this.buildChartOptions(
          res.series,
          res.projects,
          'project',
          'Hours per Project',
          [this.primaryColor],
        );
        this.loadingProjects = false;
      },
      error: () => { this.loadingProjects = false; }
    });
  }

  loadWorkersChart() {
    this.loadingWorkers = true;
    const { start, end } = this.getRange(this.workersPeriod);
    this.contractorService.getWorkersChart(start, end).subscribe({
      next: (res) => {
        this.workersChartOptions = this.buildChartOptions(
          res.series,
          res.workers,
          'worker',
          'Hours per Worker',
          [this.secondaryColor]
        );
        this.loadingWorkers = false;
      },
      error: () => { this.loadingWorkers = false; }
    });
  }

  /** Compute start/end ISO date strings for a named period. */
  private getRange(period: string): { start: string; end: string } {
    const now = new Date();
    const end = this.formatDate(now);
    let start: string;
    switch (period) {
      case 'today':
        start = end;
        break;
      case 'week': {
        const d = new Date(now);
        d.setDate(d.getDate() - d.getDay()); // start of week (Sunday)
        start = this.formatDate(d);
        break;
      }
      case 'year': {
        start = `${now.getFullYear()}-01-01`;
        break;
      }
      case 'month':
      default: {
        start = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-01`;
        break;
      }
    }
    return { start, end };
  }

  /**
   * Transforms server response into ApexCharts multi-series bar config.
   * Server gives: entities=[{id, name}], series=[{date, data:{id: minutes}}]
   * ApexCharts needs: series=[{name, data:[{x:date, y:hours}]}]
   */
  buildChartOptions(
    seriesData: any[],
    entities: any[],
    entityKey: string,
    title: string,
    colors: string[]
  ): any {
    if (!entities || entities.length === 0 || !seriesData || seriesData.length === 0) {
      return this.emptyChartOptions(title);
    }

    const categories = seriesData.map(s => s.date);

    const series = entities.map((entity: any) => ({
      name: entity.name,
      data: seriesData.map(s => {
        const minutes = s.data?.[entity.id] ?? 0;
        return parseFloat((minutes / 60).toFixed(2)); // convert to hours
      })
    }));

    return {
      series,
      chart: {
        type: 'bar',
        height: 340,
        toolbar: { show: false },
        stacked: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          borderRadius: 4,
        }
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ['transparent'] },
      xaxis: {
        categories,
        labels: { rotate: -30, style: { fontSize: '11px' } },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        title: { text: '' },
        labels: {
          formatter: (val: number) => val.toFixed(1) + 'h'
        }
      },
      tooltip: {
        y: { formatter: (val: number) => val.toFixed(2) + ' hrs' }
      },
      fill: { opacity: 1 },
      legend: { position: 'bottom', horizontalAlign: 'center' },
      colors,
      grid: {
        borderColor: '#f1f1f1',
        padding: { left: 0, right: 0 }
      },
      responsive: [
        { breakpoint: 768, options: { chart: { height: 250 } } }
      ]
    };
  }

  emptyChartOptions(title: string): any {
    return {
      series: [{ name: title, data: [] }],
      chart: { type: 'bar', height: 340, toolbar: { show: false } },
      xaxis: { categories: [] },
      noData: { text: 'No data for selected range', style: { fontSize: '14px' } }
    };
  }



  private formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }
}
