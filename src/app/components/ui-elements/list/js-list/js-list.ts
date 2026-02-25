import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-js-list',
  templateUrl: './js-list.html',
  styleUrls: ['./js-list.scss'],
  imports: [NgbNavModule],
})
export class JsList {
  public active = 1;
}
