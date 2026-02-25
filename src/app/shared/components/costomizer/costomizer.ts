import { NgClass } from '@angular/common';
import { Component, HostListener, inject, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CheckLayout } from './check-layout/check-layout';
import { ColorPicker } from './color-picker/color-picker';
import { LayoutOption } from './layout-option/layout-option';
import { LayoutService } from '../../services/layout/layout.service';

@Component({
  selector: 'app-costomizer',
  templateUrl: './costomizer.html',
  styleUrls: ['./costomizer.scss'],
  imports: [CheckLayout, ColorPicker, LayoutOption, NgClass],
})
export class Costomizer {
  private modalService = inject(NgbModal);
  layout = inject(LayoutService);

  public customizer: string = '';
  public sidebarType: string = 'compact-wrapper';
  public screenwidth: number = window.innerWidth;
  public layoutType: string = 'ltr';
  public primary_color: string = '#6362E7';
  public secondary_color: string = '#FFC500';

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    const target = event.target as Window;
    this.screenwidth = target.innerWidth;
  }

  openModal(popup: TemplateRef<NgbModal>) {
    this.modalService.open(popup, {
      backdropClass: 'dark-modal',
      centered: true,
    });
  }

  Customizer(val: string) {
    this.customizer = val;
  }

  applyColor() {
    document.documentElement.style.setProperty('--theme-default', this.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  }

  customizeSidebarType(val: string) {
    this.sidebarType = val;
  }

  copyText(data: object) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    // this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });
  }
}
