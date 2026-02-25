import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';
import { log, ActivityGroup } from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.html',
  styleUrls: ['./activity-log.scss'],
  imports: [FeatherIcons],
})
export class ActivityLog {
  public todays: ActivityGroup[] = [];

  constructor() {
    this.todays = log.todayData;
  }
}
