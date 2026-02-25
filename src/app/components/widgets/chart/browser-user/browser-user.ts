import { Component } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import * as chartData from '../../../../shared/data/widgets/chart';

@Component({
  selector: 'app-browser-user',
  templateUrl: './browser-user.html',
  styleUrls: ['./browser-user.scss'],
  imports: [NgApexchartsModule],
})
export class BrowserUser {
  public browserUser = chartData.BrowserUses;
}
