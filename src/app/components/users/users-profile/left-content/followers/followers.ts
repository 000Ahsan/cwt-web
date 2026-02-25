import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.html',
  styleUrls: ['./followers.scss'],
  imports: [NgbCollapse],
})
export class Followers {
  public isProfile2 = false;
}
