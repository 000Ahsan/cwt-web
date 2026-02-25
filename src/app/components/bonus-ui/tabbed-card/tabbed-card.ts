import { Component } from '@angular/core';

import { ColorOption } from './color-option/color-option';
import { ColorTab } from './color-tab/color-tab';
import { MaterialTabColor } from './material-tab-color/material-tab-color';
import { SimpleTab } from './simple-tab/simple-tab';

@Component({
  selector: 'app-tabbed-card',
  templateUrl: './tabbed-card.html',
  styleUrls: ['./tabbed-card.scss'],
  imports: [SimpleTab, ColorTab, ColorOption, MaterialTabColor],
})
export class TabbedCard {
  public active = 1;
  public materialSuccess = 'success';
  public materialSecondary = 'secondary';
}
