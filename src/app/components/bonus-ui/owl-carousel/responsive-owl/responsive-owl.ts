import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-responsive-owl',
  templateUrl: './responsive-owl.html',
  styleUrls: ['./responsive-owl.scss'],
  imports: [CarouselModule],
})
export class ResponsiveOwl {
  public owlcarousel1 = data.owlcarousel1;
  public owlcarousel2ptions = data.owlcarousel2ptions;
}
