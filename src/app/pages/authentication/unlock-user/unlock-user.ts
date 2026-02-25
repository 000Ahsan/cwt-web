import { Component } from '@angular/core';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.html',
  styleUrls: ['./unlock-user.scss'],
  imports: [],
})
export class UnlockUser {
  public show: boolean = false;

  showPassword() {
    this.show = !this.show;
  }
}
