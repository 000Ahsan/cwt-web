import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import * as jobs from '../../../shared/data/job-search/job-serach';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.html',
  styleUrls: ['./cards-view.scss'],
  imports: [JobFilter, RouterLink, NgbRating],
})
export class CardsView {
  config = inject(NgbRatingConfig);

  public jobCards = jobs.jobCards;
  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
