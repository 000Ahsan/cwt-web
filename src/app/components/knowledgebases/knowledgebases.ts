import { Component } from '@angular/core';

import * as Tutorials from '../../shared/data/knowledgebases/knowledgebases';

@Component({
  selector: 'app-knowledgebases',
  templateUrl: './knowledgebases.html',
  styleUrls: ['./knowledgebases.scss'],
  imports: [],
})
export class Knowledgebases {
  public featuredTutorials = Tutorials.featuredTutorials;
}
