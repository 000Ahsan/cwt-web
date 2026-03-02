import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Breadcrumb } from '../../shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-contractor-dashboard',
  standalone: true,
  imports: [CommonModule, Breadcrumb],
  templateUrl: './dashboard.component.html',
  styles: []
})
export class ContractorDashboardComponent { }
