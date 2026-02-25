import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.html',
  styleUrls: ['./chart4.scss'],
  imports: [ChartistModule],
})
export class Chart4 {
  public chart4 = chartData.chart4;
}
