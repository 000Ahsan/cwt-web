import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pill-dark-color',
  templateUrl: './pill-dark-color.html',
  styleUrls: ['./pill-dark-color.scss'],
  imports: [NgbNavModule],
})
export class PillDarkColor {
  HomeActive8 = 'home';
}
