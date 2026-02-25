import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-height-owl',
  templateUrl: './auto-height-owl.html',
  styleUrls: ['./auto-height-owl.scss'],
  imports: [CarouselModule],
})
export class AutoHeightOwl {
  public owlcarousel14ptions = data.owlcarousel14ptions;
  public owlcarousel1 = data.owlcarousel1;
}
