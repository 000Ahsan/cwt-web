import { Component } from '@angular/core';

import { BarsAnimated } from './bars-animated/bars-animated';
import { BarsStriped } from './bars-striped/bars-striped';
import { MultipleBars } from './multiple-bars/multiple-bars';
import { ProgressBars } from './progress-bars/progress-bars';
import * as data from '../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.scss'],
  imports: [ProgressBars, MultipleBars, BarsStriped, BarsAnimated],
})
export class ProgressBar {
  public progressBars = data.progressBars;
  public smallProgressBars = data.smallProgressBars;
  public customProgressBars = data.customProgressBars;
}
