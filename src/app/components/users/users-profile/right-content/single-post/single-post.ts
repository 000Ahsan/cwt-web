import { Component, input } from '@angular/core';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';
import { UserPost } from '../../../../../shared/data/user/user';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.html',
  styleUrls: ['./single-post.scss'],
  imports: [FeatherIcons],
})
export class SinglePost {
  readonly data = input<UserPost>();
}
