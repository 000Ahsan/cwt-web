import { Component } from '@angular/core';

import { Activity } from '../activity/activity';
import { BrowserWidget } from '../browser-widget/browser-widget';
import { Calender } from '../calender/calender';
import { Clock } from '../clock/clock';
import { EarningData } from '../earning-data/earning-data';
import { EmployeeStatus } from '../employee-status/employee-status';
import { HeightEqual } from '../height-equal/height-equal';
import { ProductCart } from '../product-cart/product-cart';
import { ProfileDetails } from '../profile-details/profile-details';
import { SocialWidget } from '../social-widget/social-widget';
import { Testimonial } from '../testimonial/testimonial';
import { Weather } from '../weather/weather';
import { WidgetsJoins } from '../widgets-joins/widgets-joins';

@Component({
  selector: 'app-index',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  imports: [
    EarningData,
    Calender,
    Clock,
    Weather,
    WidgetsJoins,
    Testimonial,
    Activity,
    ProfileDetails,
    SocialWidget,
    BrowserWidget,
    ProductCart,
    EmployeeStatus,
    HeightEqual,
  ],
})
export class Index {}
