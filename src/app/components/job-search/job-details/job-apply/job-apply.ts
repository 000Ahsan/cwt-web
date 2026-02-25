import { Component } from '@angular/core';

import { jobDetail } from '../../../../shared/data/job-search/job-serach';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.html',
  styleUrls: ['./job-apply.scss'],
  imports: [],
})
export class JobApply {
  qualifications = jobDetail.qualifications;
  description = jobDetail.description;
  agencyExperience = jobDetail.agencyExperience;
  perks = jobDetail.perks;
}
