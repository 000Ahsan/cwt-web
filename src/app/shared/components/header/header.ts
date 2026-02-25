import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../feather-icons/feather-icons';
import { Chat } from './chat/chat';
import { Languages } from './languages/languages';
import { Maximize } from './maximize/maximize';
import { Mode } from './mode/mode';
import { Notification } from './notification/notification';
import { Search } from './search/search';
import { NavService } from '../../services/nav/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [Search, Languages, Maximize, Notification, Mode, Chat, RouterLink, FeatherIcons],
})
export class Header {
  private navServices = inject(NavService);

  collapseSidebar: boolean = true;
  open = false;

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  // menu open
  openMenu() {
    this.open = !this.open;
  }

  languageToggle() {
    this.navServices.language = !this.navServices.language;
  }
}
