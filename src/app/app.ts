import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Loader } from './shared/components/loader/loader';
import { NavService } from './shared/services/nav/nav.service';
import * as L from 'leaflet';

// Global Leaflet Icon Fix for Production Builds
const iconDefault = L.icon({
  iconUrl: '/assets/images/marker-icon.png',
  shadowUrl: '/assets/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private navService = inject(NavService);
  title = 'crewtrack';

  ngOnInit() {
    this.navService.refreshMenu();
  }
}
