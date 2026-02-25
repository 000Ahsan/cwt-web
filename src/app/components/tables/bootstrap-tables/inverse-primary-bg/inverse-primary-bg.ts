import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-inverse-primary-bg',
  templateUrl: './inverse-primary-bg.html',
  styleUrls: ['./inverse-primary-bg.scss'],
  imports: [],
})
export class InversePrimaryBg {
  public table = data.tableData3;
}
