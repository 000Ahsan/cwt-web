import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../shared/components/feather-icons/feather-icons';
import * as filterData from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-finde-course',
  templateUrl: './finde-course.html',
  styleUrls: ['./finde-course.scss'],
  imports: [NgbCollapse, FeatherIcons],
})
export class FindeCourse {
  public isCollapsed = false;

  public findCourse = filterData.findCourse;
}
