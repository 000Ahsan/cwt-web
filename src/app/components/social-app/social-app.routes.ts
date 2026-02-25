import { Routes } from '@angular/router';

import { SocialApp } from './social-app';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: SocialApp,
    data: {
      title: 'Social App',
      breadcrumb: 'Social App',
      animation: [routingAnimation],
    },
  },
] as Routes;
