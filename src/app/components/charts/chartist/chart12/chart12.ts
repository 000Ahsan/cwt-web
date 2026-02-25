import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart12',
  templateUrl: './chart12.html',
  styleUrls: ['./chart12.scss'],
  imports: [ChartistModule],
})
export class Chart12 {
  public chart12 = chartData.chart12;
}
