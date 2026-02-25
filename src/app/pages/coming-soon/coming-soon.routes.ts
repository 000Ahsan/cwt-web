import { Routes } from '@angular/router';

import { ComingSoonSimple } from './coming-soon-simple/coming-soon-simple';
import { SimpleWithBgImg } from './simple-with-bg-img/simple-with-bg-img';
import { SimpleWithBgVideo } from './simple-with-bg-video/simple-with-bg-video';

export default [
  {
    path: 'coming-soon-simple',
    component: ComingSoonSimple,
  },
  {
    path: 'simple-with-bg-img',
    component: SimpleWithBgImg,
  },
  {
    path: 'simple-with-bg-video',
    component: SimpleWithBgVideo,
  },
] as Routes;
