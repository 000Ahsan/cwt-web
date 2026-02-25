import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-vertical',
  templateUrl: './btn-vertical.html',
  styleUrls: ['./btn-vertical.scss'],
  imports: [],
})
export class BtnVertical {
  public show: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  openMenu() {
    this.show = !this.show;
  }
  openMenu2() {
    this.show2 = !this.show2;
  }
  openMenu3() {
    this.show3 = !this.show3;
  }
}
