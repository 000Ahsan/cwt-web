import { Component } from '@angular/core';

import { Chart1 } from './chart1/chart1';
import { Chart10 } from './chart10/chart10';
import { Chart11 } from './chart11/chart11';
import { Chart12 } from './chart12/chart12';
import { Chart2 } from './chart2/chart2';
import { Chart3 } from './chart3/chart3';
import { Chart4 } from './chart4/chart4';
import { Chart5 } from './chart5/chart5';
import { Chart6 } from './chart6/chart6';
import { Chart7 } from './chart7/chart7';
import { Chart8 } from './chart8/chart8';
import { Chart9 } from './chart9/chart9';

@Component({
  selector: 'app-chartist',
  templateUrl: './chartist.html',
  styleUrls: ['./chartist.scss'],
  imports: [
    Chart1,
    Chart2,
    Chart3,
    Chart4,
    Chart5,
    Chart6,
    Chart7,
    Chart8,
    Chart9,
    Chart10,
    Chart11,
    Chart12,
  ],
})
export class Chartist {}
