import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.html',
  styleUrls: ['./caption.scss'],
  imports: [],
})
export class Caption {
  public table2 = data.table2;
}
