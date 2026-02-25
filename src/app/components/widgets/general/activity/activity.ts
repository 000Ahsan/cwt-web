import { Component } from '@angular/core';

import { RecentActivityData } from '../../../../shared/data/widgets/data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.html',
  styleUrls: ['./activity.scss'],
  imports: [],
})
export class Activity {
  public recentActivityData = RecentActivityData;
}
