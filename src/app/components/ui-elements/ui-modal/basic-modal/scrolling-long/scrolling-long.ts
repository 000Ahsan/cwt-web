import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrolling-long',
  templateUrl: './scrolling-long.html',
  styleUrls: ['./scrolling-long.scss'],
  imports: [],
})
export class ScrollingLong {
  modalService = inject(NgbModal);

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    this.modalService.open(scrollingContent);
  }
}
