import { Routes } from '@angular/router';

import { MdeEditors } from './mde-editors/mde-editors';
import { NgxEditors } from './ngx-editors/ngx-editors';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'ngx-editors',
    component: NgxEditors,
    data: {
      title: 'Ngx Editors',
      breadcrumb: 'Ngx Editors',
      animation: [routingAnimation],
    },
  },
  {
    path: 'mde-editors',
    component: MdeEditors,
    data: {
      title: 'Mde Editors',
      breadcrumb: 'Mde Editors',
      animation: [routingAnimation],
    },
  },
] as Routes;
