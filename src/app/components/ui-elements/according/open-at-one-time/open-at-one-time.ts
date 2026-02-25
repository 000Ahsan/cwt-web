import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-at-one-time',
  templateUrl: './open-at-one-time.html',
  styleUrl: './open-at-one-time.scss',
  imports: [NgbAccordionModule],
})
export class OpenAtOneTime {
  public items = ['First', 'Second', 'Third'];
}
