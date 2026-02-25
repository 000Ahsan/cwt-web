import { Routes } from '@angular/router';

import { Contacts } from './contacts';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: Contacts,

    data: {
      title: 'Contacts',
      breadcrumb: 'Contacts',
      animation: [routingAnimation],
    },
  },
] as Routes;
