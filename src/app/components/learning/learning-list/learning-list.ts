import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import * as learningData from '../../../shared/data/learning/learning';
import { LearningFilter } from '../learning-filter/learning-filter';

@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.html',
  styleUrls: ['./learning-list.scss'],
  imports: [RouterLink, LearningFilter],
})
export class LearningList {
  public learning = learningData.learning;
  public learningTop = learningData.learningTop;
}
