import { Component } from '@angular/core';

import { BasicAccordion } from './basic-accordion/basic-accordion';
import { CollapseAccordion } from './collapse-accordion/collapse-accordion';
import { OpenAtOneTime } from './open-at-one-time/open-at-one-time';
import { TogglePanels } from './toggle-panels/toggle-panels';

@Component({
  selector: 'app-according',
  templateUrl: './according.html',
  styleUrls: ['./according.scss'],
  imports: [BasicAccordion, OpenAtOneTime, TogglePanels, CollapseAccordion],
})
export class According {}
