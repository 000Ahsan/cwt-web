import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.html',
  styleUrls: ['./mixed-chart.scss'],
  imports: [NgApexchartsModule],
})
export class MixedChart {
  public mixedChart = chartData.mixedChart;
}
