import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-text-bg-utilities',
  templateUrl: './text-bg-utilities.html',
  styleUrls: ['./text-bg-utilities.scss'],
  imports: [],
})
export class TextBgUtilities {
  public textOrBgUtilities = data.textOrBgUtilities;
}
