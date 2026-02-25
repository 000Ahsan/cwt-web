import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-color',
  templateUrl: './pagination-color.html',
  styleUrls: ['./pagination-color.scss'],
  imports: [],
})
export class PaginationColor {
  pagination = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
}
