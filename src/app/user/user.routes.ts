import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile';

export const USER_ROUTES: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'Edit Profile', breadcrumb: 'Edit Profile' }
    }
];
