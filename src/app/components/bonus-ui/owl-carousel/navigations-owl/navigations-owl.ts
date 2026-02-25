import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-navigations-owl',
  templateUrl: './navigations-owl.html',
  styleUrls: ['./navigations-owl.scss'],
  imports: [CarouselModule],
})
export class NavigationsOwl {
  public owlcarousel6ptions = data.owlcarousel6ptions;
  public owlcarousel1 = data.owlcarousel1;
}
