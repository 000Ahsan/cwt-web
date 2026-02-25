import { Component, inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import { NewTask } from '../modal/new-task/new-task';
import { TaskTags } from '../modal/task-tags/task-tags';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.html',
  styleUrls: ['./task-filter.scss'],
  imports: [FeatherIcons],
})
export class TaskFilter {
  private modalService = inject(NgbModal);

  public open: boolean = false;

  openNewTask() {
    this.modalService.open(NewTask, { size: 'lg' });
  }

  openTaskTag() {
    this.modalService.open(TaskTags, { size: 'lg' });
  }

  openMenu() {
    this.open = !this.open;
  }
}
