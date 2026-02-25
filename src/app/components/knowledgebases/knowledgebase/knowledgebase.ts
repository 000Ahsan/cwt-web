import { Component } from '@angular/core';

import * as Tutorials from '../../../shared/data/knowledgebases/knowledgebases';
import { FaqTopPart } from '../../faq/faq-top-part/faq-top-part';
import { FeaturedTutorials } from '../../faq/featured-tutorials/featured-tutorials';
import { HelpBoard } from '../help-board/help-board';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.html',
  styleUrls: ['./knowledgebase.scss'],
  imports: [HelpBoard, FaqTopPart, FeaturedTutorials],
})
export class Knowledgebase {
  public featuredTutorials = Tutorials.featuredTutorials;
}
