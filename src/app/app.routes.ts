import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { UserRole } from './core/models/auth.model';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/login/login').then(m => m.Login),
  },
  {
    path: 'contractor',
    loadComponent: () => import('./shared/components/layout/content/content').then(m => m.Content),
    canActivate: [authGuard, roleGuard],
    data: { role: UserRole.CONTRACTOR, breadcrumb: 'Contractor' },
    loadChildren: () => import('./contractor/contractor.routes').then(m => m.CONTRACTOR_ROUTES)
  },
  {
    path: 'worker',
    loadComponent: () => import('./shared/components/layout/content/content').then(m => m.Content),
    canActivate: [authGuard, roleGuard],
    data: { role: UserRole.WORKER, breadcrumb: 'Worker' },
    loadChildren: () => import('./worker/worker.routes').then(m => m.WORKER_ROUTES)
  },
  {
    path: 'error-page',
    loadComponent: () => import('./shared/components/layout/full/full').then(m => m.Full),
    loadChildren: () => import('./pages/error-pages/error-pages.routes').then(m => m.default)
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];
