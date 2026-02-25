import { Component } from '@angular/core';

import { ColorBreadcrumb } from './color-breadcrumb/color-breadcrumb';

@Component({
  selector: 'app-breadcrumb-ui',
  templateUrl: './breadcrumb-ui.html',
  styleUrls: ['./breadcrumb-ui.scss'],
  imports: [ColorBreadcrumb],
})
export class BreadcrumbUi {}
