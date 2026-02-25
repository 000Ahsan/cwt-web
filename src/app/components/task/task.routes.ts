import { Routes } from '@angular/router';

import { Task } from './task';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: Task,
    data: {
      title: 'Task',
      breadcrumb: 'Task',
      animation: [routingAnimation],
    },
  },
] as Routes;
