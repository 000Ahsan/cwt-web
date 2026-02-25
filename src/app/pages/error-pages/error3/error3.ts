import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-error3',
  templateUrl: './error3.html',
  styleUrls: ['./error3.scss'],
  imports: [SvgIconComponent, RouterLink],
})
export class Error3 {}
