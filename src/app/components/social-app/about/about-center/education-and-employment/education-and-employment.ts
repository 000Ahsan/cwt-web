import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';
import * as education from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-education-and-employment',
  templateUrl: './education-and-employment.html',
  styleUrls: ['./education-and-employment.scss'],
  imports: [FeatherIcons],
})
export class EducationAndEmployment {
  // data
  public educationData = education.educationData;
  constructor() {}
}
