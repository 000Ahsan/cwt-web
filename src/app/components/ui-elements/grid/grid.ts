import { Component } from '@angular/core';

import { GridColumn } from './grid-column/grid-column';
import { GridHorizontal } from './grid-horizontal/grid-horizontal';
import { GridNesting } from './grid-nesting/grid-nesting';
import { GridOffset } from './grid-offset/grid-offset';
import { GridOptions } from './grid-options/grid-options';
import { GridOrder } from './grid-order/grid-order';
import { GridSetting } from './grid-setting/grid-setting';
import { GridVertical } from './grid-vertical/grid-vertical';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
  imports: [
    GridOptions,
    GridColumn,
    GridSetting,
    GridVertical,
    GridHorizontal,
    GridNesting,
    GridOrder,
    GridOffset,
  ],
})
export class Grid {}
