import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-image-one',
  templateUrl: './image-one.html',
  styleUrls: ['./image-one.scss'],
  imports: [FeatherIcons],
})
export class ImageOne {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
