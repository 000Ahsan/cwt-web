import { Component } from '@angular/core';

import * as data from '../../../shared/data/bonus-ui/sticky';

export interface Notes {
  id: number;
  isDeleted: boolean;
}
@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.html',
  styleUrls: ['./sticky.scss'],
  imports: [],
})
export class Sticky {
  public notes: Notes[] = data.sticky;

  //Add new sticky note
  addStickyNote() {
    this.notes.push({ id: this.notes.length + 1, isDeleted: false });
  }

  //Delete a particulr sticky note
  deleteNote(note: { isDeleted: boolean }) {
    note.isDeleted = true;
  }
}
