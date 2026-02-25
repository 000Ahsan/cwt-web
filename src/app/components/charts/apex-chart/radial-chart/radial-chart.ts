import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.html',
  styleUrls: ['./radial-chart.scss'],
  imports: [NgApexchartsModule],
})
export class RadialChart {
  public radialBarChart = chartData.radialBarChart;
}
