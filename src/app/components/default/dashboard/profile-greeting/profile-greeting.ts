import { Component } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-profile-greeting',
  templateUrl: './profile-greeting.html',
  styleUrls: ['./profile-greeting.scss'],
  imports: [SvgIconComponent],
})
export class ProfileGreeting {}
