import { Routes } from '@angular/router';

import { ApexChart } from './apex-chart/apex-chart';
import { Chartist } from './chartist/chartist';
import { Chartjs } from './chartjs/chartjs';
import { GoogleChart } from './google-chart/google-chart';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'apex-chart',
    component: ApexChart,
    data: {
      title: 'Apex Chart',
      breadcrumb: 'Apex Chart',
      animation: [routingAnimation],
    },
  },
  {
    path: 'google-chart',
    component: GoogleChart,
    data: {
      title: 'Google Chart',
      breadcrumb: 'Google Chart',
    },
  },
  {
    path: 'chartjs',
    component: Chartjs,
    data: {
      title: 'Chart Js',
      breadcrumb: 'Chart Js',
    },
  },
  {
    path: 'chartist',
    component: Chartist,
    data: {
      title: 'Chartist',
      breadcrumb: 'Chartist',
    },
  },
] as Routes;
