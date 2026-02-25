import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.html',
  styleUrls: ['./bubble-chart.scss'],
  imports: [NgApexchartsModule],
})
export class BubbleChart {
  public bubbleChart = chartData.bubbleChart;
}
