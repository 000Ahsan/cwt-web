import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';
import * as hobbiesData from '../../../../../shared/data/social-app/social-app';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.html',
  styleUrls: ['./hobbies.scss'],
  imports: [FeatherIcons],
})
export class Hobbies {
  public HobbiesData = hobbiesData.HobbiesData;
  constructor() {}
}
