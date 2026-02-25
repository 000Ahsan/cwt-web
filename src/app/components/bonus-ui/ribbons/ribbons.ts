import { Component } from '@angular/core';

import * as data from '../../../shared/data/bonus-ui/ribbons';

@Component({
  selector: 'app-ribbons',
  templateUrl: './ribbons.html',
  styleUrls: ['./ribbons.scss'],
  imports: [],
})
export class Ribbons {
  public ribbon = data.ribbons;
  public ribbonColor = data.ribbonColor;

  ribbonTop = ['primary', 'primary', 'primary'];
}
