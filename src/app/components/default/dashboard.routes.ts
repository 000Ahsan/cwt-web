import { Routes } from '@angular/router';

import { Default } from './dashboard/default/default';
import { Ecommerce } from './ecommerce/ecommerce/ecommerce';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'default',
    component: Default,
    data: {
      title: 'Default',
      breadcrumb: 'Default',
      animation: [routingAnimation],
    },
  },
  {
    path: 'ecommerce',
    component: Ecommerce,
    data: {
      title: 'Ecommerce',
      breadcrumb: 'Ecommerce',
      animation: [routingAnimation],
    },
  },
] as Routes;
