import { Component, input } from '@angular/core';

import { SizingTable } from '../../../../shared/data/table/sizing-tables';

@Component({
  selector: 'app-common-sizing-table',
  templateUrl: './common-sizing-table.html',
  styleUrls: ['./common-sizing-table.scss'],
  imports: [],
})
export class CommonSizingTable {
  readonly table = input<SizingTable>();
}
