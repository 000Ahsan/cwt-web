import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-full-color-variant',
  templateUrl: './full-color-variant.html',
  styleUrls: ['./full-color-variant.scss'],
  imports: [FormsModule, TitleCasePipe],
})
export class FullColorVariant {
  colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'inverse'];
}
