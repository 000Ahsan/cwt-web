import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-right-to-left-owl',
  templateUrl: './right-to-left-owl.html',
  styleUrls: ['./right-to-left-owl.scss'],
  imports: [CarouselModule],
})
export class RightToLeftOwl {
  public owlcarousel9ptions = data.owlcarousel9ptions;
  public owlcarousel1 = data.owlcarousel1;
}
