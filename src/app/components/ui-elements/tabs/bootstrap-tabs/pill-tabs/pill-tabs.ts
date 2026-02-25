import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pill-tabs',
  templateUrl: './pill-tabs.html',
  styleUrls: ['./pill-tabs.scss'],
  imports: [NgbNavModule],
})
export class PillTabs {
  HomeActive = 'home';
}
