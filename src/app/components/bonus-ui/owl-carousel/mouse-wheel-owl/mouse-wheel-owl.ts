import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-mouse-wheel-owl',
  templateUrl: './mouse-wheel-owl.html',
  styleUrls: ['./mouse-wheel-owl.scss'],
  imports: [CarouselModule],
})
export class MouseWheelOwl {
  public owlcarousel13ptions = data.owlcarousel13ptions;
  public owlcarousel1 = data.owlcarousel1;
}
