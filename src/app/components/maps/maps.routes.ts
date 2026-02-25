import { Routes } from '@angular/router';

import { LeafletMap } from './leaflet-map/leaflet-map';
import { MapJs } from './map-js/map-js';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'map-js',
    component: MapJs,
    data: {
      title: 'Map Js',
      breadcrumb: 'Map Js',
      animation: [routingAnimation],
    },
  },
  {
    path: 'leaflet-map',
    component: LeafletMap,
    data: {
      title: 'Leaflet Map',
      breadcrumb: 'Leaflet Map',
      animation: [routingAnimation],
    },
  },
] as Routes;
