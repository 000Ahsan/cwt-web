import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-nesting',
  templateUrl: './btn-nesting.html',
  styleUrls: ['./btn-nesting.scss'],
  imports: [],
})
export class BtnNesting {
  public show: boolean = false;

  openMenu() {
    this.show = !this.show;
  }
}
