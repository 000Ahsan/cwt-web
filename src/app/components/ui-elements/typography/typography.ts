import { Component } from '@angular/core';

import { Blockquotes } from './blockquotes/blockquotes';
import { DisplayHeading } from './display-heading/display-heading';
import { Headings } from './headings/headings';
import { ListingTypography } from './listing-typography/listing-typography';
import { TextElements } from './text-elements/text-elements';
import * as data from '../../../shared/data/ui-kits/typography ';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.html',
  styleUrls: ['./typography.scss'],
  imports: [Headings, DisplayHeading, TextElements, ListingTypography, Blockquotes],
})
export class Typography {
  public typography = data.typography;
  public textColor = data.textColor;
}
