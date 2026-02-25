import { Component } from '@angular/core';

import * as filterData from '../../../shared/data/learning/learning';
import { UpcomingCourses } from '../../learning/learning-filter/upcoming-courses/upcoming-courses';

@Component({
  selector: 'app-knowledge-detail',
  templateUrl: './knowledge-detail.html',
  styleUrls: ['./knowledge-detail.scss'],
  imports: [UpcomingCourses],
})
export class KnowledgeDetail {
  public isCollapsed = false;
  public isCollapsed2 = false;
  public Categories = filterData.Categories;
  public upcomingCourses = filterData.upcomingCourses;
  OpenFilter: Boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
