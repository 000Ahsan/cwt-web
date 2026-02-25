import { Component } from '@angular/core';

import * as data from '../../../../shared/data/e-commerce/invoice';

@Component({
  selector: 'app-invoice-data-table',
  templateUrl: './invoice-data-table.html',
  styleUrls: ['./invoice-data-table.scss'],
  imports: [],
})
export class InvoiceDataTable {
  // data
  public invoice = data.invoice;
}
