import { Component } from '@angular/core';

import * as data from '../../../shared/data/support-ticket/support-ticket';

@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.html',
  styleUrls: ['./ticket-board.scss'],
})
export class TicketBoard {
  public ticketListStatus = data.ticketListStatus;
}
