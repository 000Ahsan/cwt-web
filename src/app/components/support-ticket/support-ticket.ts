import { AsyncPipe, DecimalPipe, NgClass } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { TicketBoard } from './ticket-board/ticket-board';
import { supportDB } from '../../shared/data/support-ticket/support-ticket';
import {
  NgbdSortableHeader2Directive,
  SortEvent,
} from '../../shared/directives/sor-table.directive';
import { SupportTicketService } from '../../shared/services/support-ticket/support-ticket.service';

@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.html',
  styleUrls: ['./support-ticket.scss'],
  providers: [SupportTicketService, DecimalPipe],
  imports: [
    TicketBoard,
    FormsModule,
    NgbdSortableHeader2Directive,
    NgbPagination,
    AsyncPipe,
    DecimalPipe,
    AsyncPipe,
    DecimalPipe,
    NgClass,
  ],
})
export class SupportTicket {
  public service = inject(SupportTicketService);

  public countries$: Observable<supportDB[]> = this.service.support$;
  public total$: Observable<number> = this.service.total$;
  public Data: supportDB[];

  readonly headers = viewChildren(NgbdSortableHeader2Directive);

  ngOnInit() {
    this.countries$.subscribe(res => {
      this.Data = res;
    });
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

  deleteTicket(id: number) {
    this.countries$.subscribe(data => {
      data.map((elem: { id: number }, i: number) => {
        elem.id == id && data.splice(i, 1);
      });
    });
  }
}
