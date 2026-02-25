import { Component } from '@angular/core';

import { CommonChart } from './common-chart/common-chart';
import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-chart-widgets',
  templateUrl: './chart-widgets.html',
  styleUrls: ['./chart-widgets.scss'],
  imports: [CommonChart],
})
export class ChartWidgets {
  public sale = chartData.sale;
  public sale1 = chartData.sale1;
  public sale2 = chartData.sale2;
}
