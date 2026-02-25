import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ToDoFilter } from './to-do-filter/to-do-filter';
import * as data from '../../shared/data/todo/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.html',
  styleUrls: ['./to-do.scss'],
  imports: [ToDoFilter, RouterLink, FormsModule],
})
export class ToDo {
  public date = new Date();
  public months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  public myDate = `${this.date.getDate()} ${this.months[this.date.getMonth()]}`;
  public text: string = '';
  public todos = data.task;
  public completed: boolean = false;
  public red_border: boolean = false;
  public visible: boolean = false;
  public objToAdd: object = {
    text: '',
    objToAdd: '',
    Date: '',
    completed: '',
    badgeClass: '',
  };

  public addTask(text: data.Task) {
    this.todos.push(text);
  }

  public taskCompleted(task: { completed: boolean }) {
    task.completed = !task.completed;
  }

  public taskDeleted(index: number) {
    this.todos.splice(index, 1);
  }

  public markAllAction(action: boolean) {
    this.todos.filter(task => {
      task.completed = action;
    });
    this.completed = action;
  }
}
