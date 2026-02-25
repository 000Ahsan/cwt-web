import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.html',
  styleUrls: ['./my-profile.scss'],
  imports: [NgbCollapse],
})
export class MyProfile {
  public isCollapsed = false;
}
