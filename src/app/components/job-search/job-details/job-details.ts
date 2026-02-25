import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import * as jobs from '../../../shared/data/job-search/job-serach';
import { JobFilter } from '../job-filter/job-filter';
import { JobApply } from './job-apply/job-apply';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.html',
  styleUrls: ['./job-details.scss'],
  imports: [JobFilter, JobApply, RouterLink, NgbRating],
})
export class JobDetails {
  config = inject(NgbRatingConfig);

  public jobCard = jobs.jobCards;
  public jobCards: jobs.JobCard[] = [];

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;

    this.jobCards = this.jobCard.slice(0, 4);
  }
}
