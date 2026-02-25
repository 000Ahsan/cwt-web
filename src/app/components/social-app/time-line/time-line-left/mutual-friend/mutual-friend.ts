import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as mutual from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-mutual-friend',
  templateUrl: './mutual-friend.html',
  styleUrls: ['./mutual-friend.scss'],
  imports: [NgbCollapse],
})
export class MutualFriend {
  public isCollapsed = false;

  public mutualFriend = mutual.mutualFriend;
}
