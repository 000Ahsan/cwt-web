import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.html',
  styleUrls: ['./sub-nav.scss'],
  imports: [FeatherIcons],
})
export class SubNav {
  public open: boolean = true;
  public open1: boolean = false;

  subMenu() {
    this.open = !this.open;
  }
  subMenu1() {
    this.open1 = !this.open1;
  }
}
