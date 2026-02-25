import { Component } from '@angular/core';

import { buttonGroup } from '../../../../shared/data/button/button';

@Component({
  selector: 'app-square-btn-group',
  templateUrl: './square-btn-group.html',
  styleUrls: ['./square-btn-group.scss'],
  imports: [],
})
export class SquareBtnGroup {
  groupBtn = buttonGroup.buttonsGroup;
}
