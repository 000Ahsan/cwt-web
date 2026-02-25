import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as data from '../../../shared/data/e-commerce/order-history';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.html',
  styleUrls: ['./order-history.scss'],
  imports: [FeatherIcons],
})
export class OrderHistory {
  public orderHistory = data.orderHistory;
}
