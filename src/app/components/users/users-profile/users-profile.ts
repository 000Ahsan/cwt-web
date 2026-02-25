import { Component } from '@angular/core';

import { LeftContent } from './left-content/left-content';
import { RightContent } from './right-content/right-content';
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.html',
  styleUrls: ['./users-profile.scss'],
  imports: [UserProfile, LeftContent, RightContent],
})
export class UsersProfile {
  public isProfile = false;
}
