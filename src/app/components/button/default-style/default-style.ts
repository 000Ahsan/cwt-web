import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { buttons } from '../../../shared/data/button/button';

@Component({
  selector: 'app-default-style',
  templateUrl: './default-style.html',
  styleUrls: ['./default-style.scss'],
  imports: [TitleCasePipe],
})
export class DefaultStyle {
  buttons = buttons.defaultButtons;
  buttonsOnline = buttons.buttonOnline;
}
