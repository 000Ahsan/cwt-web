import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-register-simple',
  templateUrl: './register-simple.html',
  styleUrls: ['./register-simple.scss'],
  imports: [FeatherIcons],
})
export class RegisterSimple {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
