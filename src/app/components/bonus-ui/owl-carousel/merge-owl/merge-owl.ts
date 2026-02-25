import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-merge-owl',
  templateUrl: './merge-owl.html',
  styleUrls: ['./merge-owl.scss'],
  imports: [CarouselModule],
})
export class MergeOwl {
  public owlcarousel4ptions = data.owlcarousel4ptions;
  public owlcarousel1 = data.owlcarousel1;
}
