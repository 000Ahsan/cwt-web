import { Component } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

import { FeatherIcons } from '../../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrls: ['./weather.scss'],
  imports: [SvgIconComponent, FeatherIcons],
})
export class Weather {}
