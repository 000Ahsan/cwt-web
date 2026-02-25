import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.html',
  styleUrls: ['./recent-order.scss'],
  imports: [NgApexchartsModule],
})
export class RecentOrder {
  public bar = chartData.bar;
  public Transaction = chartData.Transaction;
}
