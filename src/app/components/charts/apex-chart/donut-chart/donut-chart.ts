import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.html',
  styleUrls: ['./donut-chart.scss'],
  imports: [NgApexchartsModule],
})
export class DonutChart {
  public donutChart = chartData.donutChart;
}
