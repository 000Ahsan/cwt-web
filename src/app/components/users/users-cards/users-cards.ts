import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as userData from '../../../shared/data/user/user';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.html',
  styleUrls: ['./users-cards.scss'],
  imports: [RouterLink],
})
export class UsersCards {
  // data
  public userCards = userData.userCards;
}
