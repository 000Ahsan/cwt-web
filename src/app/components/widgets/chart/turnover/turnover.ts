import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-turnover',
  templateUrl: './turnover.html',
  styleUrls: ['./turnover.scss'],
  imports: [NgApexchartsModule],
})
export class Turnover {
  public turnover = chartData.TurnoverChart;
}
