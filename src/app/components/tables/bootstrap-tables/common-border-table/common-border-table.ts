import { Component, input } from '@angular/core';

import { BorderTableHorizontal } from '../../../../shared/data/table/border-tables';

@Component({
  selector: 'app-common-border-table',
  templateUrl: './common-border-table.html',
  styleUrls: ['./common-border-table.scss'],
  imports: [],
})
export class CommonBorderTable {
  readonly table = input<BorderTableHorizontal>();
}
