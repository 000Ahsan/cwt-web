import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
  imports: [FeatherIcons],
})
export class Tooltip {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
