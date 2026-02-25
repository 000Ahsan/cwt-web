import { Component } from '@angular/core';

import { ChatMenu } from '../../chat-menu/chat-menu';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.html',
  styleUrls: ['./chats.scss'],
  imports: [ChatMenu],
})
export class Chats {
  public openTab: string = 'call';
  public show = false;

  // manu open
  openMenu() {
    this.show = !this.show;
  }
}
