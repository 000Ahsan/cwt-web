import { Component } from '@angular/core';

import { ActivityFeed } from './activity-feed/activity-feed';
import { MutualFriend } from './mutual-friend/mutual-friend';
import { MyProfile } from './my-profile/my-profile';

@Component({
  selector: 'app-time-line-left',
  templateUrl: './time-line-left.html',
  styleUrls: ['./time-line-left.scss'],
  imports: [MyProfile, MutualFriend, ActivityFeed],
})
export class TimeLineLeft {}
