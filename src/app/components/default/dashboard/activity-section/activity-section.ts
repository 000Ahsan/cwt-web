import { Component } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';
import { LatestActivity } from '../../../../shared/data/dashboard/data';
import { RecentOrders } from '../recent-orders/recent-orders';

@Component({
  selector: 'app-activity-section',
  templateUrl: './activity-section.html',
  styleUrls: ['./activity-section.scss'],
  imports: [NgApexchartsModule, SvgIconComponent, RecentOrders],
})
export class ActivitySection {
  public latestActivity = LatestActivity;

  public bar = chartData.bar;
  public growthChart = chartData.growthChart;
}
