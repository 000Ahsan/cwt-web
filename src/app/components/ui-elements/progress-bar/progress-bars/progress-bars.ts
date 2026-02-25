import { Component, input } from '@angular/core';

import { ProgressBarGroup } from '../../../../shared/data/ui-kits/progress';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.html',
  styleUrls: ['./progress-bars.scss'],
})
export class ProgressBars {
  readonly bars = input<ProgressBarGroup>();
}
