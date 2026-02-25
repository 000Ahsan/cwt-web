import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-animate-owl',
  templateUrl: './animate-owl.html',
  styleUrls: ['./animate-owl.scss'],
  imports: [CarouselModule],
})
export class AnimateOwl {
  public owlcarousel11ptions = data.owlcarousel11ptions;
  public owlcarousel1 = data.owlcarousel1;
}
