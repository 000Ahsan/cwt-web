import { Component } from '@angular/core';

import * as data from '../../../../shared/data/ui-kits/typography ';

@Component({
  selector: 'app-blockquotes',
  templateUrl: './blockquotes.html',
  styleUrls: ['./blockquotes.scss'],
  imports: [],
})
export class Blockquotes {
  blockquotes = data.blockquotes;
}
