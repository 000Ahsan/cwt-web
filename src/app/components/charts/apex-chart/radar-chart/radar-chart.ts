import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.html',
  styleUrls: ['./radar-chart.scss'],
  imports: [NgApexchartsModule],
})
export class RadarChart {
  public radarChart = chartData.radarChart;
}
