import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import * as jobs from '../../../shared/data/job-search/job-serach';
import { JobCard } from '../../../shared/data/job-search/job-serach';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.html',
  styleUrls: ['./list-view.scss'],
  imports: [JobFilter, RouterLink, NgbRating],
})
export class ListView {
  config = inject(NgbRatingConfig);

  public jobCard = jobs.jobCards;
  public jobCards: JobCard[] = [];

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
    this.jobCards = this.jobCard.slice(0, 8);
  }
}
