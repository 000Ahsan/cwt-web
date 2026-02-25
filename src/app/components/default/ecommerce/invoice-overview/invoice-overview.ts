import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-invoice-overview',
  templateUrl: './invoice-overview.html',
  styleUrls: ['./invoice-overview.scss'],
  imports: [NgApexchartsModule],
})
export class InvoiceOverview {
  public invoice = chartData.invoice;
}
