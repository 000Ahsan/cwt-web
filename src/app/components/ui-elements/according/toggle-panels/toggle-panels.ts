import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-panels',
  templateUrl: './toggle-panels.html',
  styleUrl: './toggle-panels.scss',
  imports: [NgbAccordionModule],
})
export class TogglePanels {}
