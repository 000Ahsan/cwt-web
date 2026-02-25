import { Routes } from '@angular/router';

import { ChartIndex } from './chart/chart-index/chart-index';
import { Index } from './general/index/index';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'general',
    component: Index,
    data: {
      title: 'General',
      breadcrumb: 'general',
      animation: [routingAnimation],
    },
  },
  {
    path: 'chart',
    component: ChartIndex,
    data: {
      title: 'Chart',
      breadcrumb: 'chart',
      animation: [routingAnimation],
    },
  },
] as Routes;
