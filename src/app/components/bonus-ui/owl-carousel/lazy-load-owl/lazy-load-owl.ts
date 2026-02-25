import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-lazy-load-owl',
  templateUrl: './lazy-load-owl.html',
  styleUrls: ['./lazy-load-owl.scss'],
  imports: [CarouselModule],
})
export class LazyLoadOwl {
  public owlcarousel10ptions = data.owlcarousel10ptions;
  public owlcarousel1 = data.owlcarousel1;
}
