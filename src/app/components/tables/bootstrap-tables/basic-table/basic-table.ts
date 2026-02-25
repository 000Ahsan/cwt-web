import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.html',
  styleUrls: ['./basic-table.scss'],
  imports: [],
})
export class BasicTable {
  public table = data.tableData3;
}
