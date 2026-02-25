import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbHighlight, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import {
  NgbdSortableHeaderDirective,
  SortEvent,
} from '../../../shared/directives/sortable.directive';
import { Table } from '../../../shared/interface/table';
import { TableService } from '../../../shared/services/tables/tables.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.html',
  styleUrls: ['./data-table.scss'],
  providers: [TableService, DecimalPipe],
  imports: [FormsModule, NgbdSortableHeaderDirective, NgbHighlight, NgbPagination, AsyncPipe],
})
export class DataTable {
  service = inject(TableService);

  basicTable$: Observable<Table[]>;
  total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective);

  constructor() {
    const service = this.service;
    this.basicTable$ = service.basicTable$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
