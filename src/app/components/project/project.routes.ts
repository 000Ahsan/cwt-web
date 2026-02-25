import { Routes } from '@angular/router';

import { CreateNew } from './create-new/create-new';
import { ProjectList } from './project-list/project-list';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'create-new',
    component: CreateNew,
    data: {
      title: 'Create New',
      breadcrumb: 'Create New',
      animation: [routingAnimation],
    },
  },
  {
    path: 'project-list',
    component: ProjectList,
    data: {
      title: 'Project List',
      breadcrumb: 'Project List',
      animation: [routingAnimation],
    },
  },
] as Routes;
