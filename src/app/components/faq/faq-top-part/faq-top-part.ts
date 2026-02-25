import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as faq from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-faq-top-part',
  templateUrl: './faq-top-part.html',
  styleUrls: ['./faq-top-part.scss'],
  imports: [FeatherIcons],
})
export class FaqTopPart {
  public FaqTopPart = faq.FaqTopPart;
}
