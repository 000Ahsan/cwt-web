import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-marketing-expense',
  templateUrl: './marketing-expense.html',
  styleUrls: ['./marketing-expense.scss'],
  imports: [NgApexchartsModule],
})
export class MarketingExpense {
  public marketing = chartData.MarketChart;
}
