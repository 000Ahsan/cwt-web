import { Component } from '@angular/core';

import { GallerizeDirective } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.html',
  styleUrls: ['./photos.scss'],
  imports: [GallerizeDirective],
})
export class Photos {
  public imageData = [
    {
      srcUrl: 'assets/images/big-lightgallry/01.jpg',
      previewUrl: 'assets/images/big-lightgallry/01.jpg',
    },
    {
      srcUrl: 'assets/images/big-lightgallry/02.jpg',
      previewUrl: 'assets/images/big-lightgallry/02.jpg',
    },
    {
      srcUrl: 'assets/images/big-lightgallry/03.jpg',
      previewUrl: 'assets/images/big-lightgallry/03.jpg',
    },
    {
      srcUrl: 'assets/images/big-lightgallry/04.jpg',
      previewUrl: 'assets/images/big-lightgallry/04.jpg',
    },
    {
      srcUrl: 'assets/images/big-lightgallry/05.jpg',
      previewUrl: 'assets/images/big-lightgallry/05.jpg',
    },
    {
      srcUrl: 'assets/images/big-lightgallry/06.jpg',
      previewUrl: 'assets/images/big-lightgallry/06.jpg',
    },
  ];
}
