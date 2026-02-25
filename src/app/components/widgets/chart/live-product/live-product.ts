import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-live-product',
  templateUrl: './live-product.html',
  styleUrls: ['./live-product.scss'],
  imports: [NgApexchartsModule],
})
export class LiveProduct {
  public liveChart = chartData.LiveProductChart;
}
