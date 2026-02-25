import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.html',
  styleUrls: ['./validation.scss'],
  imports: [FeatherIcons],
})
export class Validation {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
