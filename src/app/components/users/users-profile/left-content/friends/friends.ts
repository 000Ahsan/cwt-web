import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fri',
  templateUrl: './friends.html',
  styleUrls: ['./friends.scss'],
  imports: [NgbCollapse],
})
export class Friends {
  public isProfile = false;
}
