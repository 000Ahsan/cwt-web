import { Routes } from '@angular/router';

import { SearchWebsite } from './search-website';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: SearchWebsite,
    data: {
      title: 'Search Website',
      breadcrumb: 'Search Website',
      animation: [routingAnimation],
    },
  },
] as Routes;
