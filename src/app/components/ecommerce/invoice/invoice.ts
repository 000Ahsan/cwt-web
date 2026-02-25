import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxPrintDirective } from 'ngx-print';

import { InvoiceDataTable } from './invoice-data-table/invoice-data-table';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.scss'],
  imports: [InvoiceDataTable, FormsModule, NgxPrintDirective],
})
export class Invoice {}
