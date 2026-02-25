import { Component } from '@angular/core';

import {
  NgbDropdown,
  NgbDropdownButtonItem,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-touchspin',
  templateUrl: './touchspin.html',
  styleUrls: ['./touchspin.scss'],
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownButtonItem,
    NgbDropdownItem,
  ],
})
export class Touchspin {
  public counter: number[] = [40, 55, 40, 40, 40, 20, 40, 50.0, 40, 40, 50, 50, 40, 60, 40];
  public contents = ['Action', 'Another Action', 'Something Else Here'];
  constructor() {}

  public increment(i: number) {
    if (
      i === 0 ||
      i === 1 ||
      i === 2 ||
      i === 3 ||
      i === 5 ||
      i === 6 ||
      i === 8 ||
      i === 9 ||
      i === 10 ||
      i === 11 ||
      i === 12 ||
      i === 13 ||
      i === 14
    ) {
      this.counter[i] += 1;
    } else if (i === 4) {
      if (this.counter[i] < 80) {
        this.counter[i] += 1;
      }
    } else if (i === 7) {
      this.counter[i] += 0.25;
    }
  }

  public decrement(i: number) {
    if (
      i === 0 ||
      i === 1 ||
      i === 2 ||
      i === 3 ||
      i === 5 ||
      i === 6 ||
      i === 8 ||
      i === 9 ||
      i === 10 ||
      i === 11 ||
      i === 12 ||
      i === 13 ||
      i === 14
    ) {
      if (this.counter[i] > 1) {
        this.counter[i] -= 1;
      }
    } else if (i === 4) {
      if (this.counter[i] > 40) {
        this.counter[i] -= 1;
      }
    } else if (i === 7) {
      if (this.counter[i] > 1) {
        this.counter[i] -= 0.25;
      }
    }
  }
}
