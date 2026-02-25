import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';

import * as data from '../../../../shared/data/bonus-ui/owl-carousel';

@Component({
  selector: 'app-stage-padding-owl',
  templateUrl: './stage-padding-owl.html',
  styleUrls: ['./stage-padding-owl.scss'],
  imports: [CarouselModule],
})
export class StagePaddingOwl {
  public owlcarousel8ptions = data.owlcarousel8ptions;
  public owlcarousel1 = data.owlcarousel1;
}
