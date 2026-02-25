import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-latest-photos',
  templateUrl: './latest-photos.html',
  styleUrls: ['./latest-photos.scss'],
  imports: [NgbCollapse],
})
export class LatestPhotos {
  public isProfile = false;
}
