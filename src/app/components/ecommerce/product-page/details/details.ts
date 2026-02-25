import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
  imports: [NgbRating, RouterLink, FormsModule],
})
export class Details {
  config = inject(NgbRatingConfig);

  rating = 4;
  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
