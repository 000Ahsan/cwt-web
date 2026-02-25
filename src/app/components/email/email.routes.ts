import { Routes } from '@angular/router';

import { EmailApp } from './email-app/email-app';
import { EmailCompose } from './email-compose/email-compose';
import { ReadMail } from './read-mail/read-mail';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'email-app',
    component: EmailApp,
    data: {
      title: 'Email App',
      breadcrumb: 'Email App',
      animation: [routingAnimation],
    },
  },
  {
    path: 'email-compose',
    component: EmailCompose,
    data: {
      title: 'email Compose',
      breadcrumb: 'email Compose',
      animation: [routingAnimation],
    },
  },
  {
    path: 'read-mail',
    component: ReadMail,
    data: {
      title: 'Read Mail',
      breadcrumb: 'Read Mail',
      animation: [routingAnimation],
    },
  },
] as Routes;
