import { Component } from '@angular/core';

import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.html',
  styleUrls: ['./calender.scss'],
  imports: [NgbDatepicker],
})
export class Calender {
  date: { year: number; month: number } | undefined;
}
