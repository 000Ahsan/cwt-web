import { Routes } from '@angular/router';

import { DetailedCourse } from './detailed-course/detailed-course';
import { LearningList } from './learning-list/learning-list';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'detailed-course',
    component: DetailedCourse,
    data: {
      title: 'Detailed Course',
      breadcrumb: 'Detailed Course',
      animation: [routingAnimation],
    },
  },
  {
    path: 'learning-list',
    component: LearningList,
    data: {
      title: 'Learning List',
      breadcrumb: 'Learning List',
      animation: [routingAnimation],
    },
  },
] as Routes;
