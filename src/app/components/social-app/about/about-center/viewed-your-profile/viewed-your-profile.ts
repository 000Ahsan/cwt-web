import { Component } from '@angular/core';

import * as viewed from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-viewed-your-profile',
  templateUrl: './viewed-your-profile.html',
  styleUrls: ['./viewed-your-profile.scss'],
  imports: [],
})
export class ViewedYourProfile {
  // data
  public viewedProfile = viewed.viewedProfile;
  constructor() {}
}
