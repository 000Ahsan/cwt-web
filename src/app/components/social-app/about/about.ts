import { Component } from '@angular/core';

import { AboutCenter } from './about-center/about-center';
import { TimeLineLeft } from '../time-line/time-line-left/time-line-left';
import { TimeLineRight } from '../time-line/time-line-right/time-line-right';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  imports: [TimeLineLeft, AboutCenter, TimeLineRight],
})
export class About {}
