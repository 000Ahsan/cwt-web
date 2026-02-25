import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as bookmarkData from '../../../shared/data/bookmark/bookmark';
import { EditBookmark } from '../model/edit-bookmark/edit-bookmark';

@Component({
  selector: 'app-create-bookmarks',
  templateUrl: './create-bookmarks.html',
  styleUrls: ['./create-bookmarks.scss'],
  imports: [FeatherIcons],
})
export class CreateBookmarks {
  private modalService = inject(NgbModal);

  public bookmarks = bookmarkData.bookmarks;
  public listBookmark: boolean = false;

  editBookmarkModel() {
    this.modalService.open(EditBookmark);
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark;
  }
}
