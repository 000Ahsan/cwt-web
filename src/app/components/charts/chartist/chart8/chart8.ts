import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart8',
  templateUrl: './chart8.html',
  styleUrls: ['./chart8.scss'],
  imports: [ChartistModule],
})
export class Chart8 {
  public chart8 = chartData.chart8;
}
