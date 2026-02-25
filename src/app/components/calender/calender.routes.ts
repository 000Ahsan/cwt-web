import { Routes } from '@angular/router';

import { Calender } from './calender';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: Calender,
    data: {
      title: 'Calender',
      breadcrumb: 'Calender',
      animation: [routingAnimation],
    },
  },
] as Routes;
