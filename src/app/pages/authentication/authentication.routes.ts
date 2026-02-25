import { Routes } from '@angular/router';

import { ForgotPassword } from './forgot-password/forgot-password';
import { ImageOne } from './image-one/image-one';
import { ImageTwo } from './image-two/image-two';
import { LoginSweetalert } from './login-sweetalert/login-sweetalert';
import { Maintenance } from './maintenance/maintenance';
import { RegisterImageOne } from './register-image-one/register-image-one';
import { RegisterImageTwo } from './register-image-two/register-image-two';
import { RegisterSimple } from './register-simple/register-simple';
import { Simple } from './simple/simple';
import { Tooltip } from './tooltip/tooltip';
import { UnlockUser } from './unlock-user/unlock-user';
import { Validation } from './validation/validation';

export default [
  {
    path: 'simple',
    component: Simple,
  },
  {
    path: 'image-one',
    component: ImageOne,
  },
  {
    path: 'image-two',
    component: ImageTwo,
  },
  {
    path: 'validation',
    component: Validation,
  },
  {
    path: 'tooltip',
    component: Tooltip,
  },
  {
    path: 'login-sweetalert',
    component: LoginSweetalert,
  },
  {
    path: 'register-simple',
    component: RegisterSimple,
  },
  {
    path: 'register-image-one',
    component: RegisterImageOne,
  },
  {
    path: 'register-image-two',
    component: RegisterImageTwo,
  },
  {
    path: 'unlock-user',
    component: UnlockUser,
  },
  {
    path: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: 'maintenance',
    component: Maintenance,
  },
] as Routes;
