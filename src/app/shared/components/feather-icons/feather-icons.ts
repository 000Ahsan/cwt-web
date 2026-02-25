import { Component, input } from '@angular/core';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-feather-icons',
  templateUrl: './feather-icons.html',
  styleUrls: ['./feather-icons.scss'],
  imports: [],
})
export class FeatherIcons {
  public readonly icon = input<string>();
  readonly class = input<string>();

  constructor() {}

  ngAfterViewInit() {
    feather.replace();
  }
}
