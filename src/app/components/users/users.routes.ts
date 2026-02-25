import { Routes } from '@angular/router';

import { UsersCards } from './users-cards/users-cards';
import { UsersEdit } from './users-edit/users-edit';
import { UsersProfile } from './users-profile/users-profile';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'users-cards',
    component: UsersCards,
    data: {
      title: 'Users Cards',
      breadcrumb: 'Users Cards',
      animation: [routingAnimation],
    },
  },
  {
    path: 'users-edit',
    component: UsersEdit,
    data: {
      title: 'Users Edit',
      breadcrumb: 'Users Edit',
      animation: [routingAnimation],
    },
  },
  {
    path: 'users-profile',
    component: UsersProfile,
    data: {
      title: 'Users Profile',
      breadcrumb: 'Users Profile',
      animation: [routingAnimation],
    },
  },
] as Routes;
