import { Routes } from '@angular/router';

import { ChatApp } from './chat-app/chat-app';
import { VideoChat } from './video-chat/video-chat';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'chat-app',
    component: ChatApp,
    data: {
      title: 'Chat App',
      breadcrumb: 'Chat App',
      animation: [routingAnimation],
    },
  },
  {
    path: 'video-chat',
    component: VideoChat,
    data: {
      title: 'Video Chat',
      breadcrumb: 'Video Chat',
      animation: [routingAnimation],
    },
  },
] as Routes;
