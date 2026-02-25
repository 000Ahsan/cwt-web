import { Component } from '@angular/core';

import { BasicTabs } from './basic-tabs/basic-tabs';
import { PillDarkColor } from './pill-dark-color/pill-dark-color';
import { PillTabs } from './pill-tabs/pill-tabs';
import { PillTabsWithIcon } from './pill-tabs-with-icon/pill-tabs-with-icon';
import { PrimaryColor } from './primary-color/primary-color';
import { TabsButtonLeftAlign } from './tabs-button-left-align/tabs-button-left-align';
import { TabsRightAlign } from './tabs-right-align/tabs-right-align';
import { TabsVertical } from './tabs-vertical/tabs-vertical';
import { TabsWithIcon } from './tabs-with-icon/tabs-with-icon';

@Component({
  selector: 'app-bootstrap-tabs',
  templateUrl: './bootstrap-tabs.html',
  styleUrls: ['./bootstrap-tabs.scss'],
  imports: [
    BasicTabs,
    TabsButtonLeftAlign,
    TabsWithIcon,
    TabsRightAlign,
    TabsVertical,
    PillTabs,
    PillTabsWithIcon,
    PillDarkColor,
    PrimaryColor,
  ],
})
export class BootstrapTabs {
  TopActive = 'top';
  HomeActive = 'home';
  HomeActive8 = 'home';

  Primary = 'primary';
  Secondary = 'secondary';
  Success = 'success';
  Info = 'info';
  Warning = 'warning';
  Danger = 'danger';
}
