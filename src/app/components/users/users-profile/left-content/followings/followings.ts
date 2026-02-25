import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.html',
  styleUrls: ['./followings.scss'],
  imports: [NgbCollapse],
})
export class Followings {
  public isProfile = false;
}
