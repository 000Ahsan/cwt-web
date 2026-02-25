import { Component } from '@angular/core';

import * as data from '../../../../shared/data/blog/blog';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.html',
  styleUrls: ['./comment-box.scss'],
  imports: [],
})
export class CommentBox {
  public commentsData = data.commentsData;
}
