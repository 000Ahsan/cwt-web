import { Routes } from '@angular/router';

import { AddPost } from './add-post/add-post';
import { BlogDetails } from './blog-details/blog-details';
import { BlogSingle } from './blog-single/blog-single';

var routingAnimation = localStorage.getItem('animate');

export default [
  {
    path: 'blog-details',
    component: BlogDetails,
    data: {
      title: 'Blog Details',
      breadcrumb: 'blog-details',
      animation: [routingAnimation],
    },
  },
  {
    path: 'blog-single',
    component: BlogSingle,
    data: {
      title: 'Blog Single',
      breadcrumb: 'blog-single',
      animation: [routingAnimation],
    },
  },
  {
    path: 'add-post',
    component: AddPost,
    data: {
      title: 'Add Post',
      breadcrumb: 'add-post',
      animation: [routingAnimation],
    },
  },
] as Routes;
