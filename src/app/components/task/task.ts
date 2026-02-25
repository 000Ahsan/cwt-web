import { Component } from '@angular/core';

import { TaskFilter } from './task-filter/task-filter';
import { TaskTab } from './task-tab/task-tab';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrls: ['./task.scss'],
  imports: [TaskFilter, TaskTab],
})
export class Task {}
