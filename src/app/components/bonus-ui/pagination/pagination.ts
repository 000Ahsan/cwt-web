import { Component } from '@angular/core';

import { PaginationActiveDisabled } from './pagination-active-disabled/pagination-active-disabled';
import { PaginationAlignment } from './pagination-alignment/pagination-alignment';
import { PaginationColor } from './pagination-color/pagination-color';
import { PaginationIcons } from './pagination-icons/pagination-icons';
import { PaginationSizing } from './pagination-sizing/pagination-sizing';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.scss'],
  imports: [
    PaginationIcons,
    PaginationAlignment,
    PaginationActiveDisabled,
    PaginationColor,
    PaginationSizing,
  ],
})
export class Pagination {}
