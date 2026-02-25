import { Routes } from '@angular/router';

import { SamplePage } from './sample-page';

export default [
  {
    path: '',
    component: SamplePage,
    data: {
      title: 'Sample Page',
      breadcrumb: 'sample page',
    },
  },
] as Routes;
