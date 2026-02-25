import { Routes } from '@angular/router';

import { GalleryGrid } from './gallery-grid/gallery-grid';
import { GalleryGridDesc } from './gallery-grid-desc/gallery-grid-desc';
import { HoverEffects } from './hover-effects/hover-effects';
import { MasonryGallery } from './masonry-gallery/masonry-gallery';
import { MasonryWithDesc } from './masonry-with-desc/masonry-with-desc';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'gallery-grid',
    component: GalleryGrid,
    data: {
      title: 'gallery',
      breadcrumb: 'gallery-grid',
      animation: [routingAnimation],
    },
  },
  {
    path: 'gallery-grid-desc',
    component: GalleryGridDesc,
    data: {
      title: 'gallery grid with description',
      breadcrumb: 'gallery grid with desc',
      animation: [routingAnimation],
    },
  },
  {
    path: 'masonry-gallery',
    component: MasonryGallery,
    data: {
      title: 'masonry gallery',
      breadcrumb: 'masonry gallery',
      animation: [routingAnimation],
    },
  },
  {
    path: 'masonry-with-desc',
    component: MasonryWithDesc,
    data: {
      title: 'masonry with description',
      breadcrumb: 'masonry with desc',
      animation: [routingAnimation],
    },
  },
  {
    path: 'hover-effects',
    component: HoverEffects,
    data: {
      title: 'hover effects',
      breadcrumb: 'hover effects',
      animation: [routingAnimation],
    },
  },
] as Routes;
