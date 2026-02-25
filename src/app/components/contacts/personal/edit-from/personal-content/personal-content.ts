import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-content',
  templateUrl: './personal-content.html',
  styleUrls: ['./personal-content.scss'],
  imports: [],
})
export class PersonalContent {
  public days = ['01', '02', '03', '04'];
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
