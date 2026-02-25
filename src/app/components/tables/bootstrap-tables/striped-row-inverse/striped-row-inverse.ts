import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-striped-row-inverse',
  templateUrl: './striped-row-inverse.html',
  styleUrls: ['./striped-row-inverse.scss'],
  imports: [],
})
export class StripedRowInverse {
  public table2 = data.table2;
}
