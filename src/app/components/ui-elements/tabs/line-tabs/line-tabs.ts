import { Component } from '@angular/core';

import { ColorTabs } from './color-tabs/color-tabs';
import { MaterialStyleLeftTab } from './material-style-left-tab/material-style-left-tab';
import { MaterialStyleRightTab } from './material-style-right-tab/material-style-right-tab';
import { SimpleMaterialStyle } from './simple-material-style/simple-material-style';
import { SimpleStyleBottomTab } from './simple-style-bottom-tab/simple-style-bottom-tab';
import { StyleLeftTab } from './style-left-tab/style-left-tab';
import { StyleRightTab } from './style-right-tab/style-right-tab';

@Component({
  selector: 'app-line-tabs',
  templateUrl: './line-tabs.html',
  styleUrls: ['./line-tabs.scss'],
  imports: [
    SimpleMaterialStyle,
    SimpleStyleBottomTab,
    StyleLeftTab,
    StyleRightTab,
    ColorTabs,
    MaterialStyleLeftTab,
    MaterialStyleRightTab,
  ],
})
export class LineTabs {
  Primary = 'primary';
  Secondary = 'secondary';
}
