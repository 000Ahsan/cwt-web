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
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }

            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
  }

  //  Active Nav
  setNavActive(item: Menu) {
    this.menuItems.filter((menuItem: Menu) => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems: Menu) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
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
