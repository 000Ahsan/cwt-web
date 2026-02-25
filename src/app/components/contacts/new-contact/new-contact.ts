import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.html',
  styleUrls: ['./new-contact.scss'],
  imports: [],
})
export class NewContact {
  activeModal = inject(NgbActiveModal);
}
