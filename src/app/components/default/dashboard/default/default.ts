import { Component } from '@angular/core';

import { ActivitySection } from '../activity-section/activity-section';
import { IncomeCard } from '../income-card/income-card';
import { ProfileGreeting } from '../profile-greeting/profile-greeting';
import { RecentOrder } from '../recent-order/recent-order';

@Component({
  selector: 'app-default',
  templateUrl: './default.html',
  styleUrls: ['./default.scss'],
  imports: [ProfileGreeting, IncomeCard, ActivitySection, RecentOrder],
})
export class Default {}
