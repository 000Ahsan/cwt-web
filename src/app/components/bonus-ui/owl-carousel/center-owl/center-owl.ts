import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-center-owl',
  templateUrl: './center-owl.html',
  styleUrls: ['./center-owl.scss'],
  imports: [CarouselModule],
})
export class CenterOwl {
  public owlcarousel3ptions = data.owlcarousel3ptions;
  public owlcarousel1 = data.owlcarousel1;
}
