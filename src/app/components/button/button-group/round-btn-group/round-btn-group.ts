import { Component } from '@angular/core';

import { buttonGroup } from '../../../../shared/data/button/button';

@Component({
  selector: 'app-round-btn-group',
  templateUrl: './round-btn-group.html',
  styleUrls: ['./round-btn-group.scss'],
  imports: [],
})
export class RoundBtnGroup {
  buttonSize = buttonGroup.buttonSize;
}
