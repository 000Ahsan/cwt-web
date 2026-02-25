import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { About } from './about/about';
import { Friends } from './friends/friends';
import { Photos } from './photos/photos';
import { TimeLine } from './time-line/time-line';
import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';
import { UserProfile } from '../users/users-profile/user-profile/user-profile';

@Component({
  selector: 'app-social-app',
  templateUrl: './social-app.html',
  styleUrls: ['./social-app.scss'],
  imports: [UserProfile, NgClass, FeatherIcons, TimeLine, About, Friends, Photos],
})
export class SocialApp {
  active = 1;
  public openTab: string = 'timeline';

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }
}
