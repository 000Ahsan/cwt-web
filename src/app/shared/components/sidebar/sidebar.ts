import { NgTemplateOutlet, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { Menu, NavService } from '../../services/nav/nav.service';
import { FeatherIcons } from '../feather-icons/feather-icons';
import { UserInfo } from './user-info/user-info';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  imports: [
    UserInfo,
    FeatherIcons,
    RouterLinkActive,
    RouterLink,
    TranslateModule,
    NgTemplateOutlet,
    NgClass,
  ],
})
export class Sidebar {
  private navService = inject(NavService);
  private router = inject(Router);

  public menuItems: Menu[];
  public margin = 0;
  public width = window.innerWidth;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;

  constructor() {
    this.navService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.checkCurrentActive();
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentActive();
      }
    });
  }

  private checkCurrentActive() {
    const currentUrl = this.router.url;
    if (!this.menuItems) return;

    this.menuItems.forEach(item => {
      if (item.path === currentUrl) {
        this.setNavActive(item);
      }
      if (item.children) {
        item.children.forEach(subItem => {
          if (subItem.path === currentUrl) {
            this.setNavActive(subItem);
          }
          if (subItem.children) {
            subItem.children.forEach(subSubItem => {
              if (subSubItem.path === currentUrl) {
                this.setNavActive(subSubItem);
              }
            });
          }
        });
      }
    });
  }

  //  Active Nav
  setNavActive(item: Menu) {
    this.menuItems.forEach((menuItem: Menu) => {
      if (menuItem !== item) {
        menuItem.active = false;
      } else {
        menuItem.active = true;
      }

      if (menuItem.children) {
        menuItem.children.forEach((subItems: Menu) => {
          if (subItems === item) {
            menuItem.active = true;
            subItems.active = true;
          } else {
            subItems.active = false;
          }

          if (subItems.children) {
            subItems.children.forEach((subSubItems: Menu) => {
              if (subSubItems === item) {
                menuItem.active = true;
                subItems.active = true;
                subSubItems.active = true;
              } else {
                subSubItems.active = false;
              }
            });
          }
        });
      }
    });
  }

  toggletNavActive(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((a: Menu) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (Array.isArray(a.children))
          a.children.forEach((b: Menu) => {
            if (a.children?.includes(item)) {
              b.active = false;
            }
          });
        return;
      });
    }
    item.active = !item.active;
  }

  sidebarToggle() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }

  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -2598 || this.margin <= -2034) {
      if (this.width === 492) {
        this.margin = -3000;
      } else {
        this.margin = -3250;
      }
      this.leftArrowNone = false;
      this.leftArrowNone = false;
    } else {
      this.leftArrowNone = false;
      this.margin += -this.width;
    }
  }
}
