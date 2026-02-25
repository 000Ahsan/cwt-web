import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart6',
  templateUrl: './chart6.html',
  styleUrls: ['./chart6.scss'],
  imports: [ChartistModule],
})
export class Chart6 {
  public chart6 = chartData.chart6;
}
