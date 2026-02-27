import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { FeatherIcons } from '../../feather-icons/feather-icons';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.html',
  styleUrls: ['./user-info.scss'],
  standalone: true,
  imports: [CommonModule, FeatherIcons],
})
export class UserInfo {
  private authService = inject(AuthService);

  get user() {
    return this.authService.currentUserValue;
  }
}
