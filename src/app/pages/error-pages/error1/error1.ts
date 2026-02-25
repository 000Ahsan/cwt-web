import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-error1',
  templateUrl: './error1.html',
  styleUrls: ['./error1.scss'],
  imports: [SvgIconComponent, RouterLink],
})
export class Error1 {}
