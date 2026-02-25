import { Routes } from '@angular/router';

import { FileManager } from './file-manager';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: FileManager,

    data: {
      title: 'File Manager',
      breadcrumb: 'File Manager',
      animation: [routingAnimation],
    },
  },
] as Routes;
