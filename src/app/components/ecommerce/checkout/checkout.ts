import { Component } from '@angular/core';

import { BillingDetail } from './billing-detail/billing-detail';
import { PlaceOrder } from './place-order/place-order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
  imports: [BillingDetail, PlaceOrder],
})
export class Checkout {}
