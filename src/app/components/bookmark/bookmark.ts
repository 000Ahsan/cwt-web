import { Component } from '@angular/core';

import { BookmarkProfile } from './bookmark-profile/bookmark-profile';
import { CreateBookmarks } from './create-bookmarks/create-bookmarks';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.html',
  styleUrls: ['./bookmark.scss'],
  imports: [BookmarkProfile, CreateBookmarks],
})
export class Bookmark {}
