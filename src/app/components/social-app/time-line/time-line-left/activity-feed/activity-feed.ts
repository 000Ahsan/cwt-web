import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as activity from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.html',
  styleUrls: ['./activity-feed.scss'],
  imports: [NgbCollapse],
})
export class ActivityFeed {
  public isCollapsed = false;
  public activityFeed = activity.activityFeed;
}
