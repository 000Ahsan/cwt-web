import { Component } from '@angular/core';

import { Double } from './double/double';
import { SinglePost } from './single-post/single-post';
import * as userData from '../../../../shared/data/user/user';

@Component({
  selector: 'app-right-content',
  templateUrl: './right-content.html',
  imports: [SinglePost, Double],
})
export class RightContent {
  public userPost = userData.userPost;
  public userPost2 = userData.userPost2;
}
