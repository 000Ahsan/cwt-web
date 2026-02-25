import { Component } from '@angular/core';

import { ChartistModule } from 'ng-chartist';

import * as chartData from '../../../../shared/data/charts/chartist';

@Component({
  selector: 'app-chart7',
  templateUrl: './chart7.html',
  styleUrls: ['./chart7.scss'],
  imports: [ChartistModule],
})
export class Chart7 {
  public chart7 = chartData.chart7;
}
