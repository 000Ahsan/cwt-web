import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-register-image-two',
  templateUrl: './register-image-two.html',
  styleUrls: ['./register-image-two.scss'],
  imports: [FeatherIcons],
})
export class RegisterImageTwo {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
