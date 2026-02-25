import { Component, input } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-color-tabs',
  templateUrl: './color-tabs.html',
  styleUrls: ['./color-tabs.scss'],
  imports: [NgbNavModule],
})
export class ColorTabs {
  readonly tabs = input<string>();
}
