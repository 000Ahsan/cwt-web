import { Component } from '@angular/core';

import { ProfileIntro } from './profile-intro/profile-intro';
import { Followers } from '../../../users/users-profile/left-content/followers/followers';
import { Followings } from '../../../users/users-profile/left-content/followings/followings';
import { Friends } from '../../../users/users-profile/left-content/friends/friends';
import { LatestPhotos } from '../../../users/users-profile/left-content/latest-photos/latest-photos';

@Component({
  selector: 'app-time-line-right',
  templateUrl: './time-line-right.html',
  styleUrls: ['./time-line-right.scss'],
  imports: [ProfileIntro, Followers, Followings, LatestPhotos, Friends],
})
export class TimeLineRight {}
