import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

import { listData } from '../../../../shared/data/ui-kits/data';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.html',
  styleUrls: ['./default-list.scss'],
  imports: [SlicePipe],
})
export class DefaultList {
  public lists = listData;
}
