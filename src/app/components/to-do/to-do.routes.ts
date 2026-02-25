import { Routes } from '@angular/router';

import { ToDo } from './to-do';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: ToDo,
    data: {
      title: 'To Do',
      breadcrumb: 'To Do',
      animation: [routingAnimation],
    },
  },
] as Routes;
