import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { buttonsPill } from '../../../shared/data/button/button';

@Component({
  selector: 'app-edge-style',
  templateUrl: './edge-style.html',
  styleUrls: ['./edge-style.scss'],
  imports: [TitleCasePipe],
})
export class EdgeStyle {
  buttons = buttonsPill.defaultButtons;
  buttonsOnline = buttonsPill.buttonOnline;
}
