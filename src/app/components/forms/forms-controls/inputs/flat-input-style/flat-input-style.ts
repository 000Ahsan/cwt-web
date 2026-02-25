import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-flat-input-style',
  templateUrl: './flat-input-style.html',
  styleUrls: ['./flat-input-style.scss'],
  imports: [FormsModule, NgSelectModule],
})
export class FlatInputStyle {
  selectedIds: string[];
  selectedName = 'Vilnius';
  selectedId: number;
  selectedNumberIds: number[];

  constructor() {}

  cities2 = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
  ];
}
