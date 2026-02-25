import { Component, input } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { CustomChartOptions } from '../../../../../shared/interface/widgets/chart';

@Component({
  selector: 'app-common-chart',
  templateUrl: './common-chart.html',
  styleUrls: ['./common-chart.scss'],
  imports: [NgApexchartsModule],
})
export class CommonChart {
  readonly data = input<CustomChartOptions>();
}
