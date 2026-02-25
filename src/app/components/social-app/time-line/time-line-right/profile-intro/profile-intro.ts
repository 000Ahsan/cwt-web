import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-intro',
  templateUrl: './profile-intro.html',
  styleUrls: ['./profile-intro.scss'],
  imports: [NgbCollapse],
})
export class ProfileIntro {
  public isCollapsed = false;
}
