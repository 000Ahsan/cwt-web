import { Routes } from '@angular/router';

import { Bookmark } from './bookmark';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: Bookmark,
    data: {
      title: 'Bookmark',
      breadcrumb: 'Bookmark',
      animation: [routingAnimation],
    },
  },
] as Routes;
