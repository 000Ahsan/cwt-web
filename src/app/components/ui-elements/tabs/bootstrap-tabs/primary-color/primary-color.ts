import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-primary-color',
  templateUrl: './primary-color.html',
  styleUrls: ['./primary-color.scss'],
  imports: [NgbNavModule, TitleCasePipe],
})
export class PrimaryColor {
  HomeActive8 = 'home';

  readonly tabs = input<string>();
}
