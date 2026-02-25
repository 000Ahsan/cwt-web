import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.html',
  styleUrls: ['./edit-bookmark.scss'],
  imports: [],
})
export class EditBookmark {
  activeModal = inject(NgbActiveModal);
}
