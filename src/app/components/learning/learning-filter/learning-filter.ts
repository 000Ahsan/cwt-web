import { Component } from '@angular/core';

import { Categories } from './categories/categories';
import { FindeCourse } from './finde-course/finde-course';
import { UpcomingCourses } from './upcoming-courses/upcoming-courses';

@Component({
  selector: 'app-learning-filter',
  templateUrl: './learning-filter.html',
  styleUrls: ['./learning-filter.scss'],
  imports: [FindeCourse, Categories, UpcomingCourses],
})
export class LearningFilter {
  OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
