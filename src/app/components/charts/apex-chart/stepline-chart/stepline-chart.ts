import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/charts/apex';

@Component({
  selector: 'app-stepline-chart',
  templateUrl: './stepline-chart.html',
  styleUrls: ['./stepline-chart.scss'],
  imports: [NgApexchartsModule],
})
export class SteplineChart {
  public steplineChart = chartData.steplineChart;
}
