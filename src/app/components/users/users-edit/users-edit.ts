import { Component } from '@angular/core';

import { EditProfile } from './edit-profile/edit-profile';
import { MyProfile } from './my-profile/my-profile';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.html',
  styleUrls: ['./users-edit.scss'],
  imports: [MyProfile, EditProfile],
})
export class UsersEdit {}
