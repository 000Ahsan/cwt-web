import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FeatherIcons } from '../feather-icons/feather-icons';
import { NavService } from '../../services/nav/nav.service';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, FeatherIcons],
})
export class Header {
  private navServices = inject(NavService);
  private authService = inject(AuthService);

  collapseSidebar: boolean = true;
  open = false;

  get userName() {
    return this.authService.currentUserValue?.firstName || 'User';
  }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  openMenu() {
    this.open = !this.open;
  }

  logout() {
    if (localStorage.getItem('active_session')) {
      Swal.fire({
        title: 'Active Session!',
        text: 'You have an active work session. Please stop the timer before logging out.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    this.authService.logout();
  }
}
