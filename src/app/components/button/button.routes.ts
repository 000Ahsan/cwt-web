import { Routes } from '@angular/router';

import { ButtonGroup } from './button-group/button-group';
import { DefaultStyle } from './default-style/default-style';
import { EdgeStyle } from './edge-style/edge-style';
import { FlatStyle } from './flat-style/flat-style';
import { RaisedStyle } from './raised-style/raised-style';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'button-group',
    component: ButtonGroup,
    data: {
      title: 'Button Group',
      breadcrumb: 'Button Group',
      animation: [routingAnimation],
    },
  },
  {
    path: 'default-style',
    component: DefaultStyle,
    data: {
      title: 'Default Style',
      breadcrumb: 'Default Style',
      animation: [routingAnimation],
    },
  },
  {
    path: 'edge-style',
    component: EdgeStyle,
    data: {
      title: 'Edge Style',
      breadcrumb: 'Edge Style',
      animation: [routingAnimation],
    },
  },
  {
    path: 'flat-style',
    component: FlatStyle,
    data: {
      title: 'Flat Style',
      breadcrumb: 'Flat Style',
      animation: [routingAnimation],
    },
  },
  {
    path: 'raised-style',
    component: RaisedStyle,
    data: {
      title: 'Raised Style',
      breadcrumb: 'Raised Style',
      animation: [routingAnimation],
    },
  },
] as Routes;
