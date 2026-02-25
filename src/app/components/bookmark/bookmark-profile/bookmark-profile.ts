import { Component, inject, viewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import { AddBookmark } from '../model/add-bookmark/add-bookmark';
import { CreateTag } from '../model/create-tag/create-tag';

@Component({
  selector: 'app-bookmark-profile',
  templateUrl: './bookmark-profile.html',
  styleUrls: ['./bookmark-profile.scss'],
  imports: [FeatherIcons],
})
export class BookmarkProfile {
  private modalService = inject(NgbModal);

  public open: boolean = false;

  readonly AddBookmark = viewChild.required<AddBookmark>('addbookmark');
  public listBookmark: boolean = false;

  openBookmark() {
    this.open = !this.open;
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark;
  }

  openAddBookmark() {
    this.modalService.open(AddBookmark, { size: 'lg' });
  }

  openTagModel() {
    this.modalService.open(CreateTag, { size: 'lg' });
  }
}
