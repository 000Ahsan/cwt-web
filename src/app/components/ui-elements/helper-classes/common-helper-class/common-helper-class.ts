import { Component, input } from '@angular/core';

@Component({
  selector: 'app-common-helper-class',
  templateUrl: './common-helper-class.html',
  styleUrls: ['./common-helper-class.scss'],
  imports: [],
})
export class CommonHelperClass {
  readonly title = input();
  readonly data = input<string>();
}
