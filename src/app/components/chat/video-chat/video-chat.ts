import { Component } from '@angular/core';

import { UsersChats } from '../chat-app/users-chats/users-chats';
import { ChatMenu } from '../chat-menu/chat-menu';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.html',
  styleUrls: ['./video-chat.scss'],
  imports: [UsersChats, ChatMenu],
})
export class VideoChat {
  public openTab: string = 'call';
  show = false;
  active = 1;

  openMenu() {
    this.show = !this.show;
  }

  public tabbed(val: string) {
    this.openTab = val;
  }
}
