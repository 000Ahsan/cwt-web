import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-using-grid',
  templateUrl: './using-grid.html',
  styleUrls: ['./using-grid.scss'],
  imports: [],
})
export class UsingGrid {
  modalService = inject(NgbModal);

  gridModal(gridContent: TemplateRef<NgbModal>) {
    this.modalService.open(gridContent);
  }
}
