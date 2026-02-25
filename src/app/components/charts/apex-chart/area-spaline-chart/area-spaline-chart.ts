import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-area-spaline-chart',
  templateUrl: './area-spaline-chart.html',
  styleUrls: ['./area-spaline-chart.scss'],
  imports: [NgApexchartsModule],
})
export class AreaSpalineChart {
  public areaSpalineChart = chartData.areaSpalineChart;
}
