import { Component } from '@angular/core';

import { listData } from '../../../../shared/data/ui-kits/data';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.html',
  styleUrls: ['./class-list.scss'],
  imports: [],
})
export class ClassList {
  public lists = listData;
}
