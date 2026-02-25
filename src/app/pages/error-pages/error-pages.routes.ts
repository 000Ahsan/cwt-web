import { Routes } from '@angular/router';

import { Error1 } from './error1/error1';
import { Error2 } from './error2/error2';
import { Error3 } from './error3/error3';
import { Error4 } from './error4/error4';

export default [
  {
    path: 'error1',
    component: Error1,
  },
  {
    path: 'error2',
    component: Error2,
  },
  {
    path: 'error3',
    component: Error3,
  },
  {
    path: 'error4',
    component: Error4,
  },
] as Routes;
