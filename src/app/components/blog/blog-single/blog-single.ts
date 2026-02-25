import { Component } from '@angular/core';

import { CommentBox } from './comment-box/comment-box';
import * as Comments from '../../../shared/data/blog/blog';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.html',
  styleUrls: ['./blog-single.scss'],
  imports: [CommentBox],
})
export class BlogSingle {
  public CommentsData = Comments.CommentsData;
}
