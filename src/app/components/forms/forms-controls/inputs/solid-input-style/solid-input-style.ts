import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solid-input-style',
  templateUrl: './solid-input-style.html',
  styleUrls: ['./solid-input-style.scss'],
  imports: [FormsModule],
})
export class SolidInputStyle {
  selectedIds: string[];
  selectedName = 'Vilnius';
  selectedId: number;
  selectedNumberIds: number[];

  cities2 = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
  ];
}
