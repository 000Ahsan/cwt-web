import { Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { FaIconLibrary, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.html',
  styleUrls: ['./rating.scss'],
  imports: [BarRatingModule, FaIconComponent],
})
export class Rating {
  squareRate = 3;
  squareRate2 = 2;
  cssRate = 2.6;
  faRate = 4;
  movieRate = 0;
  verticalRate = 5;
  fontAwesomeRate = 3.5;
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoRate = 5.6;
  faoRated = false;

  onFaoRate(e: number) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

  constructor() {
    const library = inject(FaIconLibrary);

    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }
}
