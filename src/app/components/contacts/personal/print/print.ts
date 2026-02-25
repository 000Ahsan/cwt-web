import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-print',
  templateUrl: './print.html',
  styleUrls: ['./print.scss'],
  imports: [],
})
export class Print {
  activeModal = inject(NgbActiveModal);
}
