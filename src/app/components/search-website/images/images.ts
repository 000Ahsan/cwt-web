import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';

import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

import * as images from '../../../shared/data/search-website/images';

@Component({
  selector: 'app-images',
  templateUrl: './images.html',
  styleUrls: ['./images.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [LightboxModule],
})
export class Images implements OnInit {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  items: GalleryItem[] = [];

  public imageData = images.data;

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}
