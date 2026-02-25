import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-breckpoint',
  templateUrl: './breckpoint.html',
  styleUrls: ['./breckpoint.scss'],
  imports: [],
})
export class Breckpoint {
  public breckpointSpecific = data.breckpointSpecific;
}
