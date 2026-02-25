import { Routes } from '@angular/router';

import { According } from './according/according';
import { Avatars } from './avatars/avatars';
import { BreadcrubDemo } from './breadcrub-demo/breadcrub-demo';
import { Dropdown } from './dropdown/dropdown';
import { Grid } from './grid/grid';
import { HelperClasses } from './helper-classes/helper-classes';
import { List } from './list/list';
import { Navs } from './navs/navs';
import { Popover } from './popover/popover';
import { ProgressBar } from './progress-bar/progress-bar';
import { Ribbons } from './ribbons/ribbons';
import { Shadow } from './shadow/shadow';
import { Spinners } from './spinners/spinners';
import { Steps } from './steps/steps';
import { BootstrapTabs } from './tabs/bootstrap-tabs/bootstrap-tabs';
import { LineTabs } from './tabs/line-tabs/line-tabs';
import { TagNPills } from './tag-n-pills/tag-n-pills';
import { Toaster } from './toaster/toaster';
import { Tooltip } from './tooltip/tooltip';
import { Typography } from './typography/typography';
import { UiModal } from './ui-modal/ui-modal';
import { Timeline1 } from '../bonus-ui/timeline/timeline1/timeline1';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'according',
    component: According,
    data: {
      title: 'According',
      breadcrumb: 'According',
      animation: [routingAnimation],
    },
  },
  {
    path: 'toaster',
    component: Toaster,
    data: {
      title: 'Toaster',
      breadcrumb: 'Toaster',
      animation: [routingAnimation],
    },
  },
  {
    path: 'avatars',
    component: Avatars,
    data: {
      title: 'Avatars',
      breadcrumb: 'Avatars',
      animation: [routingAnimation],
    },
  },
  {
    path: 'breadcrumb',
    component: BreadcrubDemo,
    data: {
      title: 'Breadcrumb',
      breadcrumb: 'Breadcrumb',
      animation: [routingAnimation],
    },
  },
  {
    path: 'dropdown',
    component: Dropdown,
    data: {
      title: 'Dropdown',
      breadcrumb: 'Dropdown',
      animation: [routingAnimation],
    },
  },
  {
    path: 'grid',
    component: Grid,
    data: {
      title: 'Grid',
      breadcrumb: 'Grid',
      animation: [routingAnimation],
    },
  },
  {
    path: 'helper-classes',
    component: HelperClasses,
    data: {
      title: 'Helper Classes',
      breadcrumb: 'Helper Classes',
      animation: [routingAnimation],
    },
  },
  {
    path: 'list',
    component: List,
    data: {
      title: 'List',
      breadcrumb: 'List',
      animation: [routingAnimation],
    },
  },
  {
    path: 'navs',
    component: Navs,
    data: {
      title: 'Navs',
      breadcrumb: 'Navs',
      animation: [routingAnimation],
    },
  },
  {
    path: 'popover',
    component: Popover,
    data: {
      title: 'Popover',
      breadcrumb: 'Popover',
      animation: [routingAnimation],
    },
  },
  {
    path: 'progress-bar',
    component: ProgressBar,
    data: {
      title: 'Progress Bar',
      breadcrumb: 'Progress Bar',
      animation: [routingAnimation],
    },
  },
  {
    path: 'ribbons',
    component: Ribbons,
    data: {
      title: 'Ribbons',
      breadcrumb: 'Ribbons',
      animation: [routingAnimation],
    },
  },
  {
    path: 'shadow',
    component: Shadow,
    data: {
      title: 'Shadow',
      breadcrumb: 'Shadow',
      animation: [routingAnimation],
    },
  },
  {
    path: 'spinner',
    component: Spinners,
    data: {
      title: 'Spinner',
      breadcrumb: 'Spinner',
      animation: [routingAnimation],
    },
  },
  {
    path: 'steps',
    component: Steps,
    data: {
      title: 'Steps',
      breadcrumb: 'Steps',
      animation: [routingAnimation],
    },
  },
  {
    path: 'tabs',
    children: [
      {
        path: 'bootstrap-tabs',
        component: BootstrapTabs,
        data: {
          title: 'Bootstrap Tabs',
          breadcrumb: 'Bootstrap Tabs',
          animation: [routingAnimation],
        },
      },
      {
        path: 'line-tabs',
        component: LineTabs,
        data: {
          title: 'Line Tabs',
          breadcrumb: 'Line Tabs',
          animation: [routingAnimation],
        },
      },
    ],
  },
  {
    path: 'tag-n-pills',
    component: TagNPills,
    data: {
      title: 'Tag and Pills',
      breadcrumb: 'Tag and Pills',
      animation: [routingAnimation],
    },
  },
  {
    path: 'tooltip',
    component: Tooltip,
    data: {
      title: 'Tooltip',
      breadcrumb: 'Tooltip',
      animation: [routingAnimation],
    },
  },
  {
    path: 'typography',
    component: Typography,
    data: {
      title: 'Typography',
      breadcrumb: 'Typography',
      animation: [routingAnimation],
    },
  },
  {
    path: 'ui-modal',
    component: UiModal,
    data: {
      title: 'Modal',
      breadcrumb: 'Modal',
      animation: [routingAnimation],
    },
  },

  {
    path: 'timeline1',
    component: Timeline1,
    data: {
      title: 'Timeline',
      breadcrumb: 'Timeline',
      animation: [routingAnimation],
    },
  },
] as Routes;
