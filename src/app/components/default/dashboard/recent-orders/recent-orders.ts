import { Component } from '@angular/core';

import { RecentOrder } from '../../../../shared/data/dashboard/data';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.html',
  styleUrls: ['./recent-orders.scss'],
  imports: [],
})
export class RecentOrders {
  public recentOrders = RecentOrder;
}
