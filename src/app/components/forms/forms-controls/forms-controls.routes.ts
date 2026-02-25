import { Routes } from '@angular/router';

import { CheckboxRadio } from './checkbox-radio/checkbox-radio';
import { InputGroups } from './input-groups/input-groups';
import { Inputs } from './inputs/inputs';
import { MegaOptions } from './mega-options/mega-options';
import { Validation } from './validation/validation';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'checkbox-radio',
    component: CheckboxRadio,
    data: {
      title: 'Checkbox Radio',
      breadcrumb: 'Checkbox Radio',
      animation: [routingAnimation],
    },
  },
  {
    path: 'input-groups',
    component: InputGroups,
    data: {
      title: 'Input Groups',
      breadcrumb: 'Input Groups',
      animation: [routingAnimation],
    },
  },
  {
    path: 'inputs',
    component: Inputs,
    data: {
      title: 'Base Inputs',
      breadcrumb: 'Base Inputs',
      animation: [routingAnimation],
    },
  },
  {
    path: 'mega-options',
    component: MegaOptions,
    data: {
      title: 'Mega Options',
      breadcrumb: 'Mega Options',
      animation: [routingAnimation],
    },
  },
  {
    path: 'validation',
    component: Validation,
    data: {
      title: 'Validation Forms',
      breadcrumb: 'Validation Forms',
      animation: [routingAnimation],
    },
  },
] as Routes;
