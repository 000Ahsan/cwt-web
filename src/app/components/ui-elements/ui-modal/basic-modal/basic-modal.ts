import { Component } from '@angular/core';

import { ScrollingLong } from './scrolling-long/scrolling-long';
import { Simple } from './simple/simple';
import { TooltipsPopovers } from './tooltips-popovers/tooltips-popovers';
import { UsingGrid } from './using-grid/using-grid';
import { Vertically } from './vertically/vertically';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.html',
  styleUrls: ['./basic-modal.scss'],
  imports: [Simple, ScrollingLong, TooltipsPopovers, Vertically, UsingGrid],
})
export class BasicModal {}
