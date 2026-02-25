import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as categoriesData from '../../../shared/data/knowledgebases/knowledgebases';
import { FaqTopPart } from '../../faq/faq-top-part/faq-top-part';
import { HelpBoard } from '../help-board/help-board';

@Component({
  selector: 'app-knowledge-category',
  templateUrl: './knowledge-category.html',
  styleUrls: ['./knowledge-category.scss'],
  imports: [HelpBoard, FaqTopPart, FeatherIcons, RouterLink],
})
export class KnowledgeCategory {
  public categories = categoriesData.categories;
}
