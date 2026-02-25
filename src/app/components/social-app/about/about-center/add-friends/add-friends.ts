import { Component } from '@angular/core';

import * as addFriendData from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.html',
  styleUrls: ['./add-friends.scss'],
  imports: [],
})
export class AddFriends {
  public addFriend = addFriendData.addFriends;
  constructor() {}
}
