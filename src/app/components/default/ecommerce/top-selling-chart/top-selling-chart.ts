import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-top-selling-chart',
  templateUrl: './top-selling-chart.html',
  styleUrls: ['./top-selling-chart.scss'],
  imports: [NgApexchartsModule],
})
export class TopSellingChart {
  public topSales = chartData.topSales;
}
