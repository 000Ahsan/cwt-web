import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart9',
  templateUrl: './chart9.html',
  styleUrls: ['./chart9.scss'],
  imports: [ChartistModule],
})
export class Chart9 {
  public chart9 = chartData.chart9;
}
