import { Component, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BasicModal } from './basic-modal/basic-modal';
import { StaticExample } from './static-example/static-example';

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.html',
  styleUrls: ['./ui-modal.scss'],
  imports: [StaticExample, BasicModal],
})
export class UiModal {
  modalService = inject(NgbModal);

  lmModal(content: TemplateRef<NgbModal>) {
    this.modalService.open(content, { size: 'lg' });
  }
  smModal(lmcontent: TemplateRef<NgbModal>) {
    this.modalService.open(lmcontent, { size: 'sm' });
  }
  xlModal(xlcontent: TemplateRef<NgbModal>) {
    this.modalService.open(xlcontent, { size: 'xl' });
  }
  openMdoModal(modContent: TemplateRef<NgbModal>) {
    this.modalService.open(modContent);
  }
  openFatModal(fatContent: TemplateRef<NgbModal>) {
    this.modalService.open(fatContent);
  }
  openGetBootstrapModal(getContent: TemplateRef<NgbModal>) {
    this.modalService.open(getContent);
  }
}
