import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/auth.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as chartData from '../../shared/data/dashboard/chartData';
import { ContractorService } from '../../core/services/contractor.service';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-contractor-dashboard',
  standalone: true,
  imports: [CommonModule, Breadcrumb, SvgIconComponent, NgApexchartsModule, FeatherIcons],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class ContractorDashboardComponent implements OnInit {
  public sales = chartData.sales;
  private contractorService = inject(ContractorService);
  private authService = inject(AuthService);

  public stats: any = {
    projectsCount: 0,
    workersCount: 0
  };

  ngOnInit() {
    this.contractorService.getDashboardStats().subscribe(data => {
      this.stats = data;
    });
  }

  get user(): User | null {
    return this.authService.currentUserValue;
  }
}
