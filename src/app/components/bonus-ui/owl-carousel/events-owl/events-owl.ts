import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-events-owl',
  templateUrl: './events-owl.html',
  styleUrls: ['./events-owl.scss'],
  imports: [CarouselModule],
})
export class EventsOwl {
  public owlcarousel7ptions = data.owlcarousel7ptions;
  public owlcarousel1 = data.owlcarousel1;
}
