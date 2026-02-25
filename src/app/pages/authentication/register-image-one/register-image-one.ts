import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-register-image-one',
  templateUrl: './register-image-one.html',
  styleUrls: ['./register-image-one.scss'],
  imports: [FeatherIcons],
})
export class RegisterImageOne {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
