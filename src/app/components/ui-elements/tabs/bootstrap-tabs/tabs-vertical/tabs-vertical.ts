import { Component } from '@angular/core';

import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs-vertical',
  templateUrl: './tabs-vertical.html',
  styleUrls: ['./tabs-vertical.scss'],
  imports: [NgbNavModule],
})
export class TabsVertical {
  TopActive = 'top';
}
