import { Component, inject } from '@angular/core';

import { NavService } from '../../../services/nav/nav.service';
import { FeatherIcons } from '../../feather-icons/feather-icons';

@Component({
  selector: 'app-maximize',
  templateUrl: './maximize.html',
  styleUrls: ['./maximize.scss'],
  imports: [FeatherIcons],
})
export class Maximize {
  private navServices = inject(NavService);

  public elem: HTMLElement = document.documentElement;

  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;

    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }
}
