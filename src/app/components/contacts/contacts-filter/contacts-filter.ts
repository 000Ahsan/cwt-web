import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NewContact } from '../new-contact/new-contact';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.html',
  styleUrls: ['./contacts-filter.scss'],
  imports: [],
})
export class ContactsFilter {
  private modalService = inject(NgbModal);

  public type: string;
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }

  openNewContact() {
    this.modalService.open(NewContact, { size: 'lg' });
  }
}
