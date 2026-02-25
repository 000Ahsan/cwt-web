import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.html',
  styleUrls: ['./chart2.scss'],
  imports: [ChartistModule],
})
export class Chart2 {
  public chart2 = chartData.chart2;
}
