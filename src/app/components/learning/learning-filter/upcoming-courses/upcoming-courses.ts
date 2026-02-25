import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as filterData from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-upcoming-courses',
  templateUrl: './upcoming-courses.html',
  styleUrls: ['./upcoming-courses.scss'],
  imports: [NgbCollapse],
})
export class UpcomingCourses {
  public isCollapsed = false;

  public upcomingCourses = filterData.upcomingCourses;
}
