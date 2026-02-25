import { Component } from '@angular/core';

import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrls: ['./tooltip.scss'],
  imports: [NgbTooltip],
})
export class Tooltip {}
