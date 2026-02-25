import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.html',
  styleUrls: ['./chart3.scss'],
  imports: [ChartistModule],
})
export class Chart3 {
  public chart3 = chartData.chart3;
}
