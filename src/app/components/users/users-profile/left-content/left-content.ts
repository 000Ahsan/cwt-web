import { Component } from '@angular/core';

import { AboutMe } from './about-me/about-me';
import { Followers } from './followers/followers';
import { Followings } from './followings/followings';
import { Friends } from './friends/friends';
import { LatestPhotos } from './latest-photos/latest-photos';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.html',
  styleUrls: ['./left-content.scss'],
  imports: [AboutMe, Followers, Followings, LatestPhotos, Friends],
})
export class LeftContent {}
