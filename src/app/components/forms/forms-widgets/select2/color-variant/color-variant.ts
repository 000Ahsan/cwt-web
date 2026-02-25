import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color-variant',
  templateUrl: './color-variant.html',
  styleUrls: ['./color-variant.scss'],
  imports: [FormsModule, TitleCasePipe],
})
export class ColorVariant {
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
