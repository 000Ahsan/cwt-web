import { Component } from '@angular/core';

import { Chats } from './chats/chats';
import { UsersChats } from './users-chats/users-chats';

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.html',
  styleUrls: ['./chat-app.scss'],
  imports: [UsersChats, Chats],
})
export class ChatApp {
  public clickedEvent?: Event;

  childEventClicked(user: Event) {
    this.clickedEvent = user;
  }
}
