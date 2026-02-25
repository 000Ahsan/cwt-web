import { Component } from '@angular/core';

import { ActivityLog } from './activity-log/activity-log';
import { AddFriends } from './add-friends/add-friends';
import { EducationAndEmployment } from './education-and-employment/education-and-employment';
import { Hobbies } from './hobbies/hobbies';
import { ViewedYourProfile } from './viewed-your-profile/viewed-your-profile';

@Component({
  selector: 'app-about-center',
  templateUrl: './about-center.html',
  styleUrls: ['./about-center.scss'],
  imports: [AddFriends, Hobbies, EducationAndEmployment, ViewedYourProfile, ActivityLog],
})
export class AboutCenter {}
