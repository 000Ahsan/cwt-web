import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-auto-width-owl',
  templateUrl: './auto-width-owl.html',
  styleUrls: ['./auto-width-owl.scss'],
  imports: [CarouselModule],
})
export class AutoWidthOwl {
  public owlcarousel5ptions = data.owlcarousel5ptions;
  public owlcarousel1 = data.owlcarousel1;
}
