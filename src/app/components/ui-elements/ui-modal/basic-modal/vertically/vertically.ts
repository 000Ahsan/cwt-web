import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertically',
  templateUrl: './vertically.html',
  styleUrls: ['./vertically.scss'],
  imports: [],
})
export class Vertically {
  modalService = inject(NgbModal);

  VerticallyCenteredModal(verticallyContent: TemplateRef<NgbModal>) {
    this.modalService.open(verticallyContent);
  }
}
