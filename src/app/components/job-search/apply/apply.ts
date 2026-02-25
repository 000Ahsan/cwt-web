import { Component } from '@angular/core';

import { ApplyForm } from './apply-form/apply-form';
import { JobFilter } from '../job-filter/job-filter';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.html',
  styleUrls: ['./apply.scss'],
  imports: [JobFilter, ApplyForm],
})
export class Apply {
  $index: number = 0;
  date = new Array();
  year = new Array();
  constructor() {
    for (let i = 1; i <= 31; i++) {
      this.date.push(i);
    }

    for (let i = 1985; i <= 2019; i++) {
      this.year.push(i);
    }
  }
}
