import { Component, TemplateRef, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltips-popovers',
  templateUrl: './tooltips-popovers.html',
  styleUrls: ['./tooltips-popovers.scss'],
  imports: [],
})
export class TooltipsPopovers {
  modalService = inject(NgbModal);

  tooltipsModal(tooltipContent: TemplateRef<NgbModal>) {
    this.modalService.open(tooltipContent);
  }
}
