import { Component } from '@angular/core';

import * as data from '../../../../shared/data/table/tableData';

@Component({
  selector: 'app-contextual-classes',
  templateUrl: './contextual-classes.html',
  styleUrls: ['./contextual-classes.scss'],
  imports: [],
})
export class ContextualClasses {
  public contextual = data.contextual;
}
