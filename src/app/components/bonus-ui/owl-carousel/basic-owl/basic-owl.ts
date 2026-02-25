import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-basic-owl',
  templateUrl: './basic-owl.html',
  styleUrls: ['./basic-owl.scss'],
  imports: [CarouselModule],
})
export class BasicOwl {
  public owlcarousel1ptions = data.owlcarousel1ptions;
  public owlcarousel1 = data.owlcarousel1;
}
