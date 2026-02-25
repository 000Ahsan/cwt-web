import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.html',
  styleUrls: ['./to-do-filter.scss'],
  imports: [FeatherIcons],
})
export class ToDoFilter {
  public open = false;

  openMenu() {
    this.open = !this.open;
  }
}
