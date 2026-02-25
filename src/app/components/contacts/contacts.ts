import { Component } from '@angular/core';

import { ContactsFilter } from './contacts-filter/contacts-filter';
import { Organization } from './organization/organization';
import { Personal } from './personal/personal';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.scss'],
  imports: [ContactsFilter, Personal, Organization],
})
export class Contacts {}
