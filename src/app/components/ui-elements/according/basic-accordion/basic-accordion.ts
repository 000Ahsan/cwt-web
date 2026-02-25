import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-accordion',
  templateUrl: './basic-accordion.html',
  styleUrls: ['./basic-accordion.scss'],
  imports: [NgbAccordionModule],
})
export class BasicAccordion {
  public items = ['First', 'Second', 'Third'];
}
