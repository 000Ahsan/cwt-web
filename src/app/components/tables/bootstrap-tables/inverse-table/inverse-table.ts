import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-inverse-table',
  templateUrl: './inverse-table.html',
  styleUrls: ['./inverse-table.scss'],
  imports: [],
})
export class InverseTable {
  public inverse = data.inverse;
}
