import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/feather-icons/feather-icons';
import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-hoverable-rows',
  templateUrl: './hoverable-rows.html',
  styleUrls: ['./hoverable-rows.scss'],
  imports: [FeatherIcons],
})
export class HoverableRows {
  public table = data.table;
}
