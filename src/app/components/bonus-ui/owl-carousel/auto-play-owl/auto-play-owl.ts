import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-play-owl',
  templateUrl: './auto-play-owl.html',
  styleUrls: ['./auto-play-owl.scss'],
  imports: [CarouselModule],
})
export class AutoPlayOwl {
  public owlcarousel12ptions = data.owlcarousel12ptions;
  public owlcarousel1 = data.owlcarousel1;
}
