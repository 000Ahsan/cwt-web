import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as userData from '../../../shared/data/user/user';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
  imports: [RouterLink],
})
export class Friends {
  // data
  public userCards = userData.userCards;
}
