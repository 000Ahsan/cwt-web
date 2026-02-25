import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mail-filter',
  templateUrl: './mail-filter.html',
  styleUrls: ['./mail-filter.scss'],
  imports: [RouterLink],
})
export class MailFilter {
  public open: boolean = false;

  openMenu() {
    this.open = !this.open;
  }
}
