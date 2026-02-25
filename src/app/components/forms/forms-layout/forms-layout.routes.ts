import { Routes } from '@angular/router';

import { DefaultForms } from './default-forms/default-forms';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: DefaultForms,
    data: {
      title: 'Default Forms',
      breadcrumb: 'Default Forms',
      animation: [routingAnimation],
    },
  },
] as Routes;
