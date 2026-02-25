import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-column-chart2',
  templateUrl: './column-chart2.html',
  styleUrls: ['./column-chart2.scss'],
  imports: [Ng2GoogleChartsModule],
})
export class ColumnChart2 {
  public columnChart2 = chartData.columnChart2;
}
