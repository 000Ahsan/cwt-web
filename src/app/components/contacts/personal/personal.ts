import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { AddressContent } from './edit-from/address-content/address-content';
import { General } from './edit-from/general/general';
import { PersonalContent } from './edit-from/personal-content/personal-content';
import { Print } from './print/print';
import * as data from '../../../shared/data/contact/contact';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.html',
  styleUrls: ['./personal.scss'],
  imports: [General, PersonalContent, AddressContent],
})
export class Personal {
  private modalService = inject(NgbModal);

  public history: boolean = false;
  public editContact: boolean = false;
  public contacts = data.contactData.contact;
  public open: boolean = false;

  public days = ['01', '02', '03', '04'];
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  showHistory() {
    this.history = !this.history;
  }

  deleteContact() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'This contact will be deleted from your Personal Contacts and from the chat list too.',
        icon: 'warning', // Updated from 'type' to 'icon'
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          // Updated from result.value to result.isConfirmed
          swalWithBootstrapButtons.fire('Deleted!', 'The contact has been deleted.', 'success');
          // Add additional logic to delete the contact here
        } else if (result.isDismissed) {
          // Use result.isDismissed to check for cancellation
          swalWithBootstrapButtons.fire('Cancelled', 'The contact is safe :)', 'error');
        }
      });
  }

  openPrint() {
    this.modalService.open(Print, { size: 'lg' });
  }
  openHistory() {
    this.open = !this.open;
  }
}
