import { Component } from '@angular/core';

import * as data from '../../../shared/data/bonus-ui/basic-card';

@Component({
  selector: 'app-basic-card',
  templateUrl: './basic-card.html',
  styleUrls: ['./basic-card.scss'],
  imports: [],
})
export class BasicCard {
  public cards = data.cards;
}
