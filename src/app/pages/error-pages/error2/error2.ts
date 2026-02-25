import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-error2',
  templateUrl: './error2.html',
  styleUrls: ['./error2.scss'],
  imports: [SvgIconComponent, RouterLink],
})
export class Error2 {}
