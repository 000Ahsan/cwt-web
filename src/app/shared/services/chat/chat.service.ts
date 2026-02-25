import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { ChatDB } from '../../data/chat/chat';
import { chat, ChatUsers } from '../../model/chat.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public chat: chat[] = [];
  public users: ChatUsers[] = [];

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() {
    this.chat = ChatDB.chat;
    this.users = ChatDB.chatUser;
  }

  getUsers(): Observable<ChatUsers[]> {
    return new Observable<ChatUsers[]>(observer => {
      observer.next(this.users);
      observer.complete();
    });
  }

  public getCurrentUser(): Observable<ChatUsers | undefined> {
    return this.getUsers().pipe(map(users => users.find(item => item.authenticate === 0)));
  }

  public chatToUser(id: number): Observable<ChatUsers | undefined> {
    return this.getUsers().pipe(map(users => users.find(item => item.id === id)));
  }

  public getUserChat(): Observable<chat[]> {
    return new Observable<chat[]>(observer => {
      observer.next(this.chat);
      observer.complete();
    });
  }

  public getChatHistory(id: number): Observable<chat | undefined> {
    return this.getUserChat().pipe(map(users => users.find(item => item.id === id)));
  }
}
