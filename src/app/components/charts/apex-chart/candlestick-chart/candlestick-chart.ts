import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.html',
  styleUrls: ['./candlestick-chart.scss'],
  imports: [NgApexchartsModule],
})
export class CandlestickChart {
  public candlestickChart = chartData.candlestickChart;
}
