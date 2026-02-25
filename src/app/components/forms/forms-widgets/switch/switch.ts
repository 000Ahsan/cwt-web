import { Component } from '@angular/core';

import { BasicColor } from './basic-color/basic-color';
import { BasicSwitch } from './basic-switch/basic-switch';
import { SwitchOutline } from './switch-outline/switch-outline';
import { SwitchSizing } from './switch-sizing/switch-sizing';
import { SwitchUncheckedOutline } from './switch-unchecked-outline/switch-unchecked-outline';
import { SwitchWithColor } from './switch-with-color/switch-with-color';
import { SwitchWithIcon } from './switch-with-icon/switch-with-icon';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.html',
  styleUrls: ['./switch.scss'],
  imports: [
    BasicSwitch,
    BasicColor,
    SwitchOutline,
    SwitchUncheckedOutline,
    SwitchSizing,
    SwitchWithIcon,
    SwitchWithColor,
  ],
})
export class Switch {}
