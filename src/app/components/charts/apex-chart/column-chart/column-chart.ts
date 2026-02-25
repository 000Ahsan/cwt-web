import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.html',
  styleUrls: ['./column-chart.scss'],
  imports: [NgApexchartsModule],
})
export class ColumnChart {
  public columnChart = chartData.columnChart;
}
