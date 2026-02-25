import { Component, OnInit, inject } from '@angular/core';

import { chat, ChatUsers } from '../../../../shared/model/chat.model';
import { ChatService } from '../../../../shared/services/chat/chat.service';

@Component({
  selector: 'app-users-chats',
  templateUrl: './users-chats.html',
  styleUrls: ['./users-chats.scss'],
})
export class UsersChats implements OnInit {
  private chatService = inject(ChatService);
  public profile?: ChatUsers;
  public users: ChatUsers[] = [];
  public searchUsers: ChatUsers[] = [];
  public id: number = 1;
  public chatUser?: ChatUsers;
  public chats?: chat;

  constructor() {
    this.chatService.getUsers().subscribe(users => {
      this.searchUsers = users;
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.getProfile();
    this.userChat(this.id);
  }

  public getProfile() {
    this.chatService.getCurrentUser().subscribe(userProfile => (this.profile = userProfile));
  }

  searchTerm(term: string) {
    if (!term) return (this.searchUsers = this.users);
    term = term.toLowerCase();
    let user: ChatUsers[] = [];
    this.users.filter(users => {
      if (users?.name?.toLowerCase().includes(term)) {
        user.push(users);
      }
    });
    this.searchUsers = user;
    return;
  }

  public userChat(id: number = 1): void {
    this.chatService.chatToUser(id).subscribe(chatUser => {
      this.chatUser = chatUser;
    });

    this.chatService.getChatHistory(id).subscribe((chatData?: chat) => {
      this.chats = chatData;
    });
  }
}
