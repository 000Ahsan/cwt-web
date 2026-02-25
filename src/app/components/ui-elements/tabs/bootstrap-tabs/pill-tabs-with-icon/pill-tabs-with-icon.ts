import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pill-tabs-with-icon',
  templateUrl: './pill-tabs-with-icon.html',
  styleUrls: ['./pill-tabs-with-icon.scss'],
  imports: [NgbNavModule],
})
export class PillTabsWithIcon {
  HomeActive = 'home';
}
