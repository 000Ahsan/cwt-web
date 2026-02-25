import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-yearly-growth',
  templateUrl: './yearly-growth.html',
  styleUrls: ['./yearly-growth.scss'],
  imports: [NgApexchartsModule],
})
export class YearlyGrowth {
  public yearly = chartData.yearly;
}
