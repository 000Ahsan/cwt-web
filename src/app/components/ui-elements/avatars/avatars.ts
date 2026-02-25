import { Component } from '@angular/core';

import { CommonAvatars } from './common-avatars/common-avatars';
import { Groups } from './groups/groups';
import {
  avatarsData,
  avatarsData1,
  avatarsData2,
  avatarsData3,
} from '../../../shared/data/ui-kits/data';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.html',
  styleUrls: ['./avatars.scss'],
  imports: [CommonAvatars, Groups],
})
export class Avatars {
  public avatarData = avatarsData;
  public avatarsData1 = avatarsData1;
  public avatarsData2 = avatarsData2;
  public avatarsData3 = avatarsData3;

  public title1 = 'Sizing';
  public title2 = 'Initials';
  public title3 = 'Shape';
}
