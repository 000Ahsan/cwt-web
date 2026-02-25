import { Component } from '@angular/core';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse-accordion',
  templateUrl: './collapse-accordion.html',
  styleUrl: './collapse-accordion.scss',
  imports: [NgbAccordionModule],
})
export class CollapseAccordion {}
