import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-static-example',
  templateUrl: './static-example.html',
  styleUrls: ['./static-example.scss'],
  imports: [],
})
export class StaticExample {
  modalService = inject(NgbModal);
}
