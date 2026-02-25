import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

import { FeatherIcons } from '../feather-icons/feather-icons';

@Component({
  selector: 'app-tap-to-top',
  templateUrl: './tap-to-top.html',
  styleUrls: ['./tap-to-top.scss'],
  imports: [CommonModule, FeatherIcons],
})
export class TapToTop {
  public show: boolean = false;
  private viewScroller = inject(ViewportScroller);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  topToTap() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
}
