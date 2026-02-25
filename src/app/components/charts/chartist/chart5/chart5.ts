import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart5',
  templateUrl: './chart5.html',
  styleUrls: ['./chart5.scss'],
  imports: [ChartistModule],
})
export class Chart5 {
  public chart5 = chartData.chart5;
}
