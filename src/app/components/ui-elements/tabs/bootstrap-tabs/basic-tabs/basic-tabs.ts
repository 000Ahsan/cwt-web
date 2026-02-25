import { Component } from '@angular/core';

import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-tabs',
  templateUrl: './basic-tabs.html',
  styleUrls: ['./basic-tabs.scss'],
  imports: [NgbDropdownModule, NgbNavModule],
})
export class BasicTabs {}
