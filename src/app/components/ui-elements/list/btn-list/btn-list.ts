import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

import { listData } from '../../../../shared/data/ui-kits/data';

@Component({
  selector: 'app-btn-list',
  templateUrl: './btn-list.html',
  styleUrls: ['./btn-list.scss'],
  imports: [SlicePipe, SlicePipe],
})
export class BtnList {
  public lists = listData;
}
