import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.html',
  styleUrls: ['./line-chart.scss'],
  imports: [Ng2GoogleChartsModule],
})
export class LineChart {
  public lineChart = chartData.lineChart;
}
