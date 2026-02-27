import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models/auth.model';

export const roleGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    const expectedRole = route.data['role'] as UserRole;
    const user = authService.currentUserValue;

    if (user && user.role === expectedRole) {
        return true;
    }

    // If unauthorized, redirect to their respective dashboard or login
    if (user?.role === UserRole.CONTRACTOR) {
        router.navigate(['/contractor']);
    } else if (user?.role === UserRole.WORKER) {
        router.navigate(['/worker']);
    } else {
        router.navigate(['/auth/login']);
    }

    return false;
};
