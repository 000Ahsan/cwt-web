import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { LayoutService } from '../../../services/layout/layout.service';

@Component({
  selector: 'app-layout-option',
  templateUrl: './layout-option.html',
  styleUrls: ['./layout-option.scss'],
  imports: [FormsModule],
})
export class LayoutOption {
  layout = inject(LayoutService);

  public layoutType: 'ltr' | 'rtl' | 'box-layout' = 'ltr';
  public sidebarType: string = 'compact-wrapper';
  public screenwidth: number = window.innerWidth;
  public selectedValue: string | null = null;

  // Customize Layout Type
  customizeLayoutType(val: 'ltr' | 'rtl' | 'box-layout') {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;

    if (val === 'rtl') {
      document.documentElement.setAttribute('dir', val);
      document.body.className = 'rtl';
    } else if (val === 'box-layout') {
      document.documentElement.setAttribute('dir', 'ltr'); // keep dir valid
      document.body.className = 'box-layout';
    } else {
      document.documentElement.removeAttribute('dir');
      document.body.className = '';
    }
  }

  customizeSidebarType(val: string) {
    this.sidebarType = val;
    this.layout.config.settings.sidebar_type = val;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.screenwidth = target.innerWidth;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] ?? null;
  }

  getAnimation() {
    if (this.selectedValue) {
      localStorage.setItem('animate', this.selectedValue);
      window.location.reload();
    }
  }
}
