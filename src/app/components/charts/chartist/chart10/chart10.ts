import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart10',
  templateUrl: './chart10.html',
  styleUrls: ['./chart10.scss'],
  imports: [ChartistModule],
})
export class Chart10 {
  public chart10 = chartData.chart10;
}
