import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart2',
  templateUrl: './pie-chart2.html',
  styleUrls: ['./pie-chart2.scss'],
  imports: [Ng2GoogleChartsModule],
})
export class PieChart2 {
  public pieChart2 = chartData.pieChart2;
}
