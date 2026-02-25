import { Component, input } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-material-tab-color',
  templateUrl: './material-tab-color.html',
  styleUrls: ['./material-tab-color.scss'],
  imports: [NgbNavModule],
})
export class MaterialTabColor {
  readonly color = input();
}
