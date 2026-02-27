import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FeatherIcons } from '../../shared/components/feather-icons/feather-icons';
import { AuthService } from '../../core/services/auth.service';
import { NavService } from '../../shared/services/nav/nav.service';
import { UserRole } from '../../core/models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, FeatherIcons],
})
export class Login {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private navService = inject(NavService);

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: string = '';
  public loading: boolean = false;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.navService.refreshMenu();
        if (response.user.role === UserRole.CONTRACTOR) {
          this.router.navigate(['/contractor']);
        } else {
          this.router.navigate(['/worker']);
        }
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Invalid email or password';
        this.loading = false;
      }
    });
  }
}
