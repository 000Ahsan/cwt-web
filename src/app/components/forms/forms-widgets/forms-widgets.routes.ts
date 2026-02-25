import { Routes } from '@angular/router';

import { Clipboard } from './clipboard/clipboard';
import { Datepicker } from './datepicker/datepicker';
import { Select2 } from './select2/select2';
import { Switch } from './switch/switch';
import { Touchspin } from './touchspin/touchspin';
import { Typeahead } from './typeahead/typeahead';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'datepicker',
    component: Datepicker,
    data: {
      title: 'Datepicker',
      breadcrumb: 'Datepicker',
      animation: [routingAnimation],
    },
  },
  {
    path: 'touchspin',
    component: Touchspin,
    data: {
      title: 'Touchspin',
      breadcrumb: 'Touchspin',
      animation: [routingAnimation],
    },
  },
  {
    path: 'select2',
    component: Select2,
    data: {
      title: 'Select2',
      breadcrumb: 'Select2',
      animation: [routingAnimation],
    },
  },
  {
    path: 'switch',
    component: Switch,
    data: {
      title: 'Switch',
      breadcrumb: 'Switch',
      animation: [routingAnimation],
    },
  },
  {
    path: 'typeahead',
    component: Typeahead,
    data: {
      title: 'Typeahead',
      breadcrumb: 'Typeahead',
      animation: [routingAnimation],
    },
  },
  {
    path: 'clipboard',
    component: Clipboard,
    data: {
      title: 'Clipboard',
      breadcrumb: 'Clipboard',
    },
  },
] as Routes;
