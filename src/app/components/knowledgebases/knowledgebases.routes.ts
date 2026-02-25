import { Routes } from '@angular/router';

import { KnowledgeCategory } from './knowledge-category/knowledge-category';
import { KnowledgeDetail } from './knowledge-detail/knowledge-detail';
import { Knowledgebase } from './knowledgebase/knowledgebase';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'knowledgebase',
    component: Knowledgebase,
    data: {
      title: 'Knowledgebase',
      breadcrumb: 'Knowledgebase',
      animation: [routingAnimation],
    },
  },
  {
    path: 'knowledge-category',
    component: KnowledgeCategory,
    data: {
      title: 'Knowledge Category',
      breadcrumb: 'Knowledge Category',
      animation: [routingAnimation],
    },
  },
  {
    path: 'knowledge-detail',
    component: KnowledgeDetail,
    data: {
      title: 'Knowledge Detail',
      breadcrumb: 'Knowledge Detail',
      animation: [routingAnimation],
    },
  },
] as Routes;
