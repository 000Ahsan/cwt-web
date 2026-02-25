import { Component } from '@angular/core';

import * as data from '../../../shared/data/search-website/all';

@Component({
  selector: 'app-all',
  templateUrl: './all.html',
  styleUrls: ['./all.scss'],
  imports: [],
})
export class All {
  fillRatingArray: [] = [];
  unFillRatingArray: [] = [];
  public all = data.all;
  public s!: number;
  public showRating!: number;

  constructor() {
    this.all.filter(data => {
      this.s = data.rating;
    });
  }
}
