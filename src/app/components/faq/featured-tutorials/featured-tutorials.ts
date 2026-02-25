import { Component, inject, input } from '@angular/core';

import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { featuredTutorial } from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-featured-tutorials',
  templateUrl: './featured-tutorials.html',
  styleUrls: ['./featured-tutorials.scss'],
  imports: [NgbRating],
})
export class FeaturedTutorials {
  config = inject(NgbRatingConfig);

  readonly data = input<featuredTutorial[]>();

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
