import { Component } from '@angular/core';

import * as data from '../../../shared/data/blog/blog';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-detailed-course',
  templateUrl: './detailed-course.html',
  styleUrls: ['./detailed-course.scss'],
  imports: [LearningFilter],
})
export class DetailedCourse {
  public commentsData = data.commentsData;
}
