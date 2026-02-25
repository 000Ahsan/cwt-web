import { Component } from '@angular/core';

import { BrowserUser } from '../browser-user/browser-user';
import { ChartWidgets } from '../chart-widgets/chart-widgets';
import { LiveProduct } from '../live-product/live-product';
import { MarketingExpense } from '../marketing-expense/marketing-expense';
import { MonthlySales } from '../monthly-sales/monthly-sales';
import { TotalEarning } from '../total-earning/total-earning';
import { Turnover } from '../turnover/turnover';
import { Uses } from '../uses/uses';

@Component({
  selector: 'app-chart-index',
  templateUrl: './chart-index.html',
  styleUrls: ['./chart-index.scss'],
  imports: [
    ChartWidgets,
    MarketingExpense,
    TotalEarning,
    LiveProduct,
    Turnover,
    MonthlySales,
    Uses,
    BrowserUser,
  ],
})
export class ChartIndex {}
