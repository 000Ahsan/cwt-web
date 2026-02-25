import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.html',
  styleUrls: ['./activity.scss'],
  imports: [NgApexchartsModule],
})
export class Activity {
  public activityChart = chartData.activityChart;
}
