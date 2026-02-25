import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

import * as chatData from '../../../shared/data/chat/chat';

@Component({
  selector: 'app-chat-menu',
  templateUrl: './chat-menu.html',
  styleUrls: ['./chat-menu.scss'],
  imports: [NgClass],
})
export class ChatMenu {
  public openTab: string = 'call';

  public calls = chatData.ChatDB.call;

  public tabbed(val: string) {
    this.openTab = val;
  }
}
