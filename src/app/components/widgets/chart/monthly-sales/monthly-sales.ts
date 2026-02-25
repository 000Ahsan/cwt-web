import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.html',
  styleUrls: ['./monthly-sales.scss'],
  imports: [NgApexchartsModule],
})
export class MonthlySales {
  public monthly = chartData.MonthlySale;
}
