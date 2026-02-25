import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-image-two',
  templateUrl: './image-two.html',
  styleUrls: ['./image-two.scss'],
  imports: [FeatherIcons],
})
export class ImageTwo {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
