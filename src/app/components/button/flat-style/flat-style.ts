import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { buttons2 } from '../../../shared/data/button/button';

@Component({
  selector: 'app-flat-style',
  templateUrl: './flat-style.html',
  styleUrls: ['./flat-style.scss'],
  imports: [TitleCasePipe],
})
export class FlatStyle {
  buttons = buttons2.defaultButtons2;
  buttonsOnline = buttons2.buttonOnline2;
}
