import { Routes } from '@angular/router';

import { SupportTicket } from './support-ticket';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: '',
    component: SupportTicket,
    data: {
      title: 'Support Ticket',
      breadcrumb: 'Support Ticket',
      animation: [routingAnimation],
    },
  },
] as Routes;
