import { Routes } from '@angular/router';

import { Faq } from './faq';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: Faq,
    data: {
      title: 'Faq',
      breadcrumb: 'Faq',
      animation: [routingAnimation],
    },
  },
] as Routes;
