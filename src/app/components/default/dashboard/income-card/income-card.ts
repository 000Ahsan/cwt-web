import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/dashboard/chartData';

@Component({
  selector: 'app-income-card',
  templateUrl: './income-card.html',
  styleUrls: ['./income-card.scss'],
  imports: [NgApexchartsModule],
})
export class IncomeCard {
  public sales = chartData.sales;
}
