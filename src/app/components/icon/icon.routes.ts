import { Routes } from '@angular/router';

import { FeatherIco } from './feather-ico/feather-ico';
import { FlagIcon } from './flag-icon/flag-icon';
import { FontawesomeIcon } from './fontawesome-icon/fontawesome-icon';
import { IcoIcon } from './ico-icon/ico-icon';
import { ThimifyIcon } from './thimify-icon/thimify-icon';
import { WhetherIcon } from './whether-icon/whether-icon';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'flag-icon',
    component: FlagIcon,
    data: { animation: [routingAnimation] },
  },
  {
    path: 'fontawesome-icon',
    component: FontawesomeIcon,
    data: { animation: [routingAnimation] },
  },
  {
    path: 'ico-icon',
    component: IcoIcon,
    data: { animation: [routingAnimation] },
  },
  {
    path: 'thimify-icon',
    component: ThimifyIcon,
    data: { animation: [routingAnimation] },
  },
  {
    path: 'feather-ico',
    component: FeatherIco,
    data: { animation: [routingAnimation] },
  },
  {
    path: 'whether-icon',
    component: WhetherIcon,
    data: { animation: [routingAnimation] },
  },
] as Routes;
