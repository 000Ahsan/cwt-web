import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { environment } from '../../../../../../public/environments/environment';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.html',
  styleUrls: ['./user-info.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class UserInfo {
  apiUrl = environment.apiBaseUrl;
  private authService = inject(AuthService);

  get user() {
    return this.authService.currentUserValue;
  }
}
