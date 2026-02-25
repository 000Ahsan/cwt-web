import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-striped-row',
  templateUrl: './striped-row.html',
  styleUrls: ['./striped-row.scss'],
  imports: [],
})
export class StripedRow {
  public table2 = data.table2;
}
