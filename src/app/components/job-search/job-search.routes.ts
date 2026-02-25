import { Routes } from '@angular/router';

import { Apply } from './apply/apply';
import { CardsView } from './cards-view/cards-view';
import { JobDetails } from './job-details/job-details';
import { ListView } from './list-view/list-view';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'cards-view',
    component: CardsView,
    data: {
      title: 'Cards View',
      breadcrumb: 'Cards View',
      animation: [routingAnimation],
    },
  },
  {
    path: 'list-view',
    component: ListView,
    data: {
      title: 'List View',
      breadcrumb: 'List View',
      animation: [routingAnimation],
    },
  },
  {
    path: 'job-details',
    component: JobDetails,
    data: {
      title: 'Job Details',
      breadcrumb: 'Job Details',
      animation: [routingAnimation],
    },
  },
  {
    path: 'apply',
    component: Apply,
    data: {
      title: 'Apply',
      breadcrumb: 'Apply',
      animation: [routingAnimation],
    },
  },
] as Routes;
