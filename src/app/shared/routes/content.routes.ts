import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard',
      isEnable: true,
    },
    loadChildren: () => import('../../components/default/dashboard.routes'),
  },
  {
    path: 'widgets',
    data: {
      title: 'Widgets',
      breadcrumb: 'Widgets',
      isEnable: true,
    },
    loadChildren: () => import('../../components/widgets/widgets.routes'),
  },
  {
    path: 'page-layout',
    data: {
      title: 'Page Layout',
      breadcrumb: 'Page Layout',
      isEnable: true,
    },
    loadChildren: () => import('../../components/page-layout/page-layout.routes'),
  },
  {
    path: 'ui-kits',
    data: {
      title: 'Ui Kits',
      breadcrumb: 'Base',
      isEnable: true,
    },
    loadChildren: () => import('../../components/ui-elements/ui-elements.routes'),
  },
  {
    path: 'bonus-ui',
    data: {
      title: 'Bonus UI',
      breadcrumb: 'Advance',
      isEnable: true,
    },
    loadChildren: () => import('../../components/bonus-ui/bonus-ui.routes'),
  },
  {
    path: 'icon',
    data: {
      title: 'Icons',
      breadcrumb: 'Icons',
      isEnable: true,
    },
    loadChildren: () => import('../../components/icon/icon.routes'),
  },
  {
    path: 'button',
    data: {
      title: 'Icons',
      breadcrumb: 'Icons',
      isEnable: true,
    },
    loadChildren: () => import('../../components/button/button.routes'),
  },
  {
    path: 'charts',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
      isEnable: true,
    },
    loadChildren: () => import('../../components/charts/charts.routes'),
  },
  {
    path: 'forms-controls',
    data: {
      title: 'Forms Controls',
      breadcrumb: 'Forms Controls',
      isEnable: true,
    },
    loadChildren: () => import('../../components/forms/forms-controls/forms-controls.routes'),
  },
  {
    path: 'forms-widgets',
    data: {
      title: 'Forms Widgets',
      breadcrumb: 'Forms Widgets',
      isEnable: true,
    },
    loadChildren: () => import('../../components/forms/forms-widgets/forms-widgets.routes'),
  },
  {
    path: 'default-forms',
    data: {
      title: 'Default Forms',
      breadcrumb: 'Default Forms',
      isEnable: true,
    },
    loadChildren: () => import('../../components/forms/forms-layout/forms-layout.routes'),
  },
  {
    path: 'bootstrap-tables',
    data: {
      title: 'Bootstrap Tables',
      breadcrumb: 'Bootstrap Tables',
      isEnable: true,
    },
    loadChildren: () => import('../../components/tables/bootstrap-tables/bootstrap-tables.routes'),
  },
  {
    path: 'data-table',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
      isEnable: true,
    },
    loadChildren: () => import('../../components/tables/data-table/data-table.routes'),
  },
  {
    path: 'project',
    data: {
      title: 'Project',
      breadcrumb: 'Project',
      isEnable: true,
    },
    loadChildren: () => import('../../components/project/project.routes'),
  },
  {
    path: 'file-manager',
    data: {
      title: 'File Manager',
      breadcrumb: 'File Manager',
      isEnable: true,
    },
    loadChildren: () => import('../../components/file-manager/file-manager.routes'),
  },
  {
    path: 'ecommerce',
    data: {
      title: 'E-commerce',
      breadcrumb: 'E-commerce',
      isEnable: true,
    },
    loadChildren: () => import('../../components/ecommerce/ecommerce.routes'),
  },
  {
    path: 'email',
    data: {
      title: 'Email',
      breadcrumb: 'Email',
      isEnable: true,
    },
    loadChildren: () => import('../../components/email/email.routes'),
  },
  {
    path: 'chat',
    data: {
      title: 'Chat',
      breadcrumb: 'Chat',
      isEnable: true,
    },
    loadChildren: () => import('../../components/chat/chat.routes'),
  },
  {
    path: 'social-app',
    loadChildren: () => import('../../components/social-app/social-app.routes'),
  },
  {
    path: 'users',
    data: {
      title: 'Users',
      breadcrumb: 'Users',
      isEnable: true,
    },
    loadChildren: () => import('../../components/users/users.routes'),
  },
  {
    path: 'bookmark',
    loadChildren: () => import('../../components/bookmark/bookmark.routes'),
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../components/contacts/contacts.routes'),
  },
  {
    path: 'task',
    loadChildren: () => import('../../components/task/task.routes'),
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/calender/calender.routes'),
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/to-do/to-do.routes'),
  },
  {
    path: 'search-website',
    loadChildren: () => import('../../components/search-website/search-website.routes'),
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../components/gallery/all-gallery.routes'),
  },
  {
    path: 'blog',
    data: {
      title: 'Blog',
      breadcrumb: 'Blog',
      isEnable: true,
    },
    loadChildren: () => import('../../components/blog/blog.routes'),
  },
  {
    path: 'faq',
    loadChildren: () => import('../../components/faq/faq.routes'),
  },
  {
    path: 'job-search',
    data: {
      title: 'Job Search',
      breadcrumb: 'Job Search',
      isEnable: true,
    },
    loadChildren: () => import('../../components/job-search/job-search.routes'),
  },
  {
    path: 'learning',
    data: {
      title: 'Learning',
      breadcrumb: 'Learning',
      isEnable: true,
    },
    loadChildren: () => import('../../components/learning/learning.routes'),
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.routes'),
  },
  {
    path: 'maps',
    data: {
      title: 'Maps',
      breadcrumb: 'Maps',
      isEnable: true,
    },
    loadChildren: () => import('../../components/maps/maps.routes'),
  },
  {
    path: 'editors',
    data: {
      title: 'Editors',
      breadcrumb: 'Editors',
      isEnable: true,
    },
    loadChildren: () => import('../../components/editors/editors.routes'),
  },
  {
    path: 'knowledgebases',
    data: {
      title: 'Knowledgebases',
      breadcrumb: 'Knowledgebases',
      isEnable: true,
    },
    loadChildren: () => import('../../components/knowledgebases/knowledgebases.routes'),
  },
  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/support-ticket/support-ticket.routes'),
  },
];
