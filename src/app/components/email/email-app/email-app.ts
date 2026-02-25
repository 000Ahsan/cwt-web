import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as email from '../../../shared/data/email/email';
import { MailFilter } from '../mail-filter/mail-filter';

@Component({
  selector: 'app-email-app',
  templateUrl: './email-app.html',
  styleUrls: ['./email-app.scss'],
  imports: [MailFilter, RouterLink],
})
export class EmailApp {
  show = false;

  // data
  public emailData = email.emailData;

  // manu show
  openMenu() {
    this.show = !this.show;
  }
}
