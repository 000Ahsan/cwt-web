import { Component, OnInit, AfterViewInit, viewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

// Strong typing for markers
interface MapMarker {
  position: google.maps.LatLngLiteral;
  label: google.maps.MarkerLabel;
  options: google.maps.MarkerOptions;
  title: string;
}

@Component({
  selector: 'app-map-js',
  templateUrl: './map-js.html',
  styleUrls: ['./map-js.scss'],
  imports: [GoogleMapsModule],
})
export class MapJs implements OnInit, AfterViewInit {
  public markers: MapMarker[] = [];
  public zoom = 4;

  // Google Map reference (new Angular signal-style viewChild)
  readonly map = viewChild.required<GoogleMap>(GoogleMap);

  ngOnInit() {
    this.markers.push({
      position: { lat: 40.4168, lng: -3.7038 },
      label: { color: 'black', text: 'Madrid' },
      options: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      },
      title: 'Madrid',
    });

    this.markers.push({
      position: { lat: 40.4168, lng: -3.7038 },
      label: { color: 'black', text: 'Madrid' },
      options: { draggable: true, animation: google.maps.Animation.DROP },
      title: 'Madrid',
    });
  }

  ngAfterViewInit() {
    const mapInstance = this.map().googleMap;
    if (mapInstance) {
      const streetView = mapInstance.getStreetView();
      streetView.setOptions({
        position: { lat: 38.9938386, lng: -77.2515373 },
        pov: { heading: 70, pitch: -10 },
      });
      streetView.setVisible(true);
    }
  }
}
