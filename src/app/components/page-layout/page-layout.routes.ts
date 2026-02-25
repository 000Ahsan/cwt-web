import { Routes } from '@angular/router';

import { FooterDark } from './footer-dark/footer-dark';
import { FooterFix } from './footer-fix/footer-fix';
import { FooterLight } from './footer-light/footer-light';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'footer-dark',
    component: FooterDark,
    data: {
      title: 'Page Layout',
      breadcrumb: 'Footer Dark',
      animation: [routingAnimation],
    },
  },
  {
    path: 'footer-light',
    component: FooterLight,
    data: {
      title: 'Footer Light',
      breadcrumb: 'Footer Light',
      animation: [routingAnimation],
    },
  },
  {
    path: 'footer-fixed',
    component: FooterFix,
    data: {
      title: 'Footer Fixed',
      breadcrumb: 'Footer Fixed',
      animation: [routingAnimation],
    },
  },
] as Routes;
