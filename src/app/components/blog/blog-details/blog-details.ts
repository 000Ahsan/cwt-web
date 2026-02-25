import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Blog, BlogData } from '../../../shared/data/blog/blog';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.html',
  styleUrls: ['./blog-details.scss'],
  imports: [RouterLink],
})
export class BlogDetails {
  public BlogData: Blog[] = BlogData;
  public BlogSid: Blog[] = BlogData;
  public blog: Blog[] = [];

  constructor() {
    this.blog = this.BlogSid.slice(0, 2);
  }
}
