import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.html',
  styleUrls: ['./chart1.scss'],
  imports: [ChartistModule],
})
export class Chart1 {
  public chart1 = chartData.chart1;
}
