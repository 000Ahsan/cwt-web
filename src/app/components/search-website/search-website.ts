import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import { All } from './all/all';
import { Images } from './images/images';
import { Videos } from './videos/videos';

@Component({
  selector: 'app-search-website',
  templateUrl: './search-website.html',
  styleUrls: ['./search-website.scss'],
  imports: [NgClass, All, Images, Videos],
})
export class SearchWebsite {
  public openTab: string = 'All';

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }
}
