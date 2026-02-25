import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { buttonsPill } from '../../../shared/data/button/button';

@Component({
  selector: 'app-raised-style',
  templateUrl: './raised-style.html',
  styleUrls: ['./raised-style.scss'],
  imports: [TitleCasePipe],
})
export class RaisedStyle {
  buttons = buttonsPill.defaultButtons;
  buttonsOnline = buttonsPill.buttonOnline;
}
