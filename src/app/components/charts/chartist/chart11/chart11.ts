import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart11',
  templateUrl: './chart11.html',
  styleUrls: ['./chart11.scss'],
  imports: [ChartistModule],
})
export class Chart11 {
  public chart11 = chartData.chart11;
}
