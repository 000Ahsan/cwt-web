import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.html',
  styleUrls: ['./uses.scss'],
  imports: [NgApexchartsModule],
})
export class Uses {
  public uses = chartData.WidgetsUserChart;
}
