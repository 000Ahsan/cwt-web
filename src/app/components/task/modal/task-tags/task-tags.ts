import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-tags',
  templateUrl: './task-tags.html',
  styleUrls: ['./task-tags.scss'],
  imports: [],
})
export class TaskTags {
  activeModal = inject(NgbActiveModal);
}
