import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.html',
  styleUrls: ['./simple.scss'],
  imports: [FeatherIcons],
})
export class Simple {
  public show: boolean = false;
  showPassword() {
    this.show = !this.show;
  }
}
