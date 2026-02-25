import { Component, input } from '@angular/core';

import { Avatar } from '../../../../shared/data/ui-kits/data';

@Component({
  selector: 'app-common-avatars',
  templateUrl: './common-avatars.html',
  styleUrls: ['./common-avatars.scss'],
  imports: [],
})
export class CommonAvatars {
  readonly title = input<string>();
  readonly data = input<Avatar[]>();
}
