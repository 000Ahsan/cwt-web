import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-total-earning',
  templateUrl: './total-earning.html',
  styleUrls: ['./total-earning.scss'],
  imports: [NgApexchartsModule],
})
export class TotalEarning {
  public totalEarningChart = chartData.TotalEarningChart;
}
