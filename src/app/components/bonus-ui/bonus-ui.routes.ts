import { Routes } from '@angular/router';

import { BasicCard } from './basic-card/basic-card';
import { BootstrapNotify } from './bootstrap-notify/bootstrap-notify';
import { BreadcrumbUi } from './breadcrumb-ui/breadcrumb-ui';
import { CreativeCard } from './creative-card/creative-card';
import { Dropzone } from './dropzone/dropzone';
import { ImageCrop } from './image-cropper/image-cropper';
import { OwlCarousel } from './owl-carousel/owl-carousel';
import { Pagination } from './pagination/pagination';
import { RangeSlider } from './range-slider/range-slider';
import { Rating } from './rating/rating';
import { Ribbons } from './ribbons/ribbons';
import { Steps } from './steps/steps';
import { Sticky } from './sticky/sticky';
import { Sweetalert2 } from './sweetalert2/sweetalert2';
import { TabbedCard } from './tabbed-card/tabbed-card';
import { Timeline1 } from './timeline/timeline1/timeline1';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'bootstrap-notify',
    component: BootstrapNotify,
    data: {
      title: 'Bootstrap Notify',
      breadcrumb: 'Bootstrap Notify',
      animation: [routingAnimation],
    },
  },
  {
    path: 'rating',
    component: Rating,
    data: {
      title: 'Rating',
      breadcrumb: 'Rating',
      animation: [routingAnimation],
    },
  },
  {
    path: 'dropzone',
    component: Dropzone,
    data: {
      title: 'Dropzone',
      breadcrumb: 'Dropzone',
      animation: [routingAnimation],
    },
  },
  {
    path: 'owl-carousel',
    component: OwlCarousel,
    data: {
      title: 'Owl carousel',
      breadcrumb: 'Owl carousel',
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
    path: 'pagination',
    component: Pagination,
    data: {
      title: 'Pagination',
      breadcrumb: 'Pagination',
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
    path: 'image-cropper',
    component: ImageCrop,
    data: {
      title: 'Image Cropper',
      breadcrumb: 'Image Cropper',
      animation: [routingAnimation],
    },
  },

  {
    path: 'sweetalert2',
    component: Sweetalert2,
    data: {
      title: 'Sweetalert2',
      breadcrumb: 'Sweetalert2',
      animation: [routingAnimation],
    },
  },
  {
    path: 'sticky',
    component: Sticky,
    data: {
      title: 'Sticky',
      breadcrumb: 'Sticky',
      animation: [routingAnimation],
    },
  },
  {
    path: 'basic-card',
    component: BasicCard,
    data: {
      title: 'Basic Card',
      breadcrumb: 'Basic Card',
      animation: [routingAnimation],
    },
  },
  {
    path: 'creative-card',
    component: CreativeCard,
    data: {
      title: 'Creative Card',
      breadcrumb: 'Creative Card',
      animation: [routingAnimation],
    },
  },
  {
    path: 'tabbed-card',
    component: TabbedCard,
    data: {
      title: 'Tabbed Card',
      breadcrumb: 'Tabbed Card',
      animation: [routingAnimation],
    },
  },
  {
    path: 'range-slider',
    component: RangeSlider,
    data: {
      title: 'Range Slider',
      breadcrumb: 'Range Slider',
      animation: [routingAnimation],
    },
  },
  {
    path: 'breadcrumb-ui',
    component: BreadcrumbUi,
    data: {
      title: 'Breadcrumb Ui',
      breadcrumb: 'Breadcrumb Ui',
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
