import { Component, input } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-color-option',
  templateUrl: './color-option.html',
  styleUrls: ['./color-option.scss'],
  imports: [NgbNavModule],
})
export class ColorOption {
  readonly color = input();
}
