import { Component } from '@angular/core';

import { MailFilter } from '../mail-filter/mail-filter';

@Component({
  selector: 'app-read-mail',
  templateUrl: './read-mail.html',
  styleUrls: ['./read-mail.scss'],
  imports: [MailFilter],
})
export class ReadMail {}
