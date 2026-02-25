import { Component } from '@angular/core';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import * as chartData from '../../../../shared/data/charts/google-chart';

@Component({
  selector: 'app-pie-chart4',
  templateUrl: './pie-chart4.html',
  styleUrls: ['./pie-chart4.scss'],
  imports: [Ng2GoogleChartsModule],
})
export class PieChart4 {
  public pieChart3 = chartData.pieChart3;
}
