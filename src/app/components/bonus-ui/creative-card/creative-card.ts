import { Component } from '@angular/core';

import * as data from '../../../shared/data/bonus-ui/creative-card';

@Component({
  selector: 'app-creative-card',
  templateUrl: './creative-card.html',
  styleUrls: ['./creative-card.scss'],
  imports: [],
})
export class CreativeCard {
  public creativeCard = data.creativeCard;
}
