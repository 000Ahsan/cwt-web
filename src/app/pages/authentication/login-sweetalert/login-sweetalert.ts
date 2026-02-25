import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-login-sweetalert',
  templateUrl: './login-sweetalert.html',
  styleUrls: ['./login-sweetalert.scss'],
  imports: [FeatherIcons],
})
export class LoginSweetalert {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
