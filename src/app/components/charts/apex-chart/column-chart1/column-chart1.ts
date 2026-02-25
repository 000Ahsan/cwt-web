import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-column-chart1',
  templateUrl: './column-chart1.html',
  styleUrls: ['./column-chart1.scss'],
  imports: [NgApexchartsModule],
})
export class ColumnChart1 {
  public columnChart2 = chartData.columnChart2;
}
