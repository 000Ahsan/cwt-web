import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  level?: number;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private router = inject(Router);

  private unsubscriber: Subject<void> = new Subject<void>();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);
  private url = new BehaviorSubject<string>('default message');
  currentUrl = this.url.asObservable();

  fullScreen: boolean = false;

  // Language
  public language: boolean = false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth >= 991;

  // Search Box
  public search: boolean = false;

  constructor() {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: Event) => {
        const target = evt.target as Window;
        this.setScreenWidth(target.innerWidth);
        if (target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });

    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe(() => {
        this.collapseSidebar = true;
      });
    }
  }

  changeUrl(val: string): void {
    this.url.next(val);
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      headTitle1: 'General',
      headTitle2: 'Dashboards & widgets.',
    },
    {
      level: 1,
      title: 'Dashboard',
      icon: 'home',
      type: 'sub',
      badgeType: 'success',
      badgeValue: '2',
      active: true,
      children: [
        { path: '/dashboard/default', title: 'Default', type: 'link' },
        { path: '/dashboard/ecommerce', title: 'Ecommerce', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Widgets',
      icon: 'airplay',
      type: 'sub',
      active: false,
      children: [
        { path: '/widgets/general', title: 'General', type: 'link' },
        { path: '/widgets/chart', title: 'Chart', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Page layout',
      icon: 'layout',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/page-layout/footer-light',
          title: 'Footer Light',
          type: 'link',
        },
        {
          path: '/page-layout/footer-dark',
          title: 'footer Dark',
          type: 'link',
        },
        {
          path: '/page-layout/footer-fixed',
          title: 'Footer Fixed',
          type: 'link',
        },
      ],
    },
    {
      headTitle1: 'Components',
      headTitle2: 'UI Components & Elements.',
    },
    {
      level: 1,
      title: 'Ui-Kits',
      icon: 'box',
      type: 'sub',
      active: false,
      children: [
        { path: '/ui-kits/avatars', title: 'Avatars', type: 'link' },
        { path: '/ui-kits/grid', title: 'Grid', type: 'link' },
        {
          path: '/ui-kits/helper-classes',
          title: 'Helper-Classes',
          type: 'link',
        },
        { path: '/ui-kits/list', title: 'List', type: 'link' },
        { path: '/ui-kits/shadow', title: 'Shadow', type: 'link' },
        { path: '/ui-kits/spinner', title: 'Spinner', type: 'link' },
        { path: '/ui-kits/tag-n-pills', title: 'Tag and Pills', type: 'link' },
        { path: '/ui-kits/typography', title: 'Typography', type: 'link' },
        { path: '/ui-kits/progress-bar', title: 'Progress Bar', type: 'link' },
        { path: '/ui-kits/ui-modal', title: 'Modal', type: 'link' },
        { path: '/ui-kits/popover', title: 'Popover', type: 'link' },
        { path: '/ui-kits/tooltip', title: 'Tooltip', type: 'link' },
        { path: '/ui-kits/dropdown', title: 'Dropdown', type: 'link' },
        { path: '/ui-kits/according', title: 'According', type: 'link' },
        { path: '/ui-kits/toaster', title: 'Toaster', type: 'link' },
        {
          title: 'Tabs',
          type: 'sub',
          level: 2,
          active: false,
          children: [
            {
              path: '/ui-kits/tabs/bootstrap-tabs',
              title: 'Bootstraps Tabs',
              type: 'link',
            },
            {
              path: '/ui-kits/tabs/line-tabs',
              title: 'Line tabs',
              type: 'link',
            },
          ],
        },
        { path: '/ui-kits/navs', title: 'Navs', type: 'link' },
      ],
    },
    {
      title: 'Bonus Ui',
      icon: 'folder-plus',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: 'bonus-ui/rating', title: 'Rating', type: 'link' },
        { path: 'bonus-ui/dropzone', title: 'Dropzone', type: 'link' },
        { path: 'bonus-ui/sweetalert2', title: 'SweetAlert2', type: 'link' },
        { path: 'bonus-ui/owl-carousel', title: 'Owl Carousel', type: 'link' },
        { path: 'bonus-ui/ribbons', title: 'Ribbons', type: 'link' },
        { path: 'bonus-ui/pagination', title: 'Pagination', type: 'link' },
        { path: 'bonus-ui/steps', title: 'Steps', type: 'link' },
        { path: 'bonus-ui/range-slider', title: 'Range slider', type: 'link' },
        { path: 'bonus-ui/breadcrumb-ui', title: 'Breadcrumb', type: 'link' },
        {
          path: 'bonus-ui/image-cropper',
          title: 'Image Cropper',
          type: 'link',
        },
        { path: 'bonus-ui/sticky', title: 'Sticky', type: 'link' },
        { path: 'bonus-ui/basic-card', title: 'Basic Card', type: 'link' },
        {
          path: 'bonus-ui/creative-card',
          title: 'Creative Card',
          type: 'link',
        },
        { path: 'bonus-ui/tabbed-card', title: 'Tabbed Card', type: 'link' },
        { path: '/bonus-ui/timeline1', title: 'Time Line', type: 'link' },
      ],
    },
    {
      title: 'Icons',
      icon: 'command',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/icon/flag-icon', title: 'Flag Icon', type: 'link' },
        {
          path: '/icon/fontawesome-icon',
          title: 'Fontawesome Icon',
          type: 'link',
        },
        { path: '/icon/ico-icon', title: 'Ico Icon', type: 'link' },
        { path: '/icon/thimify-icon', title: 'Themify Icon', type: 'link' },
        { path: '/icon/feather-ico', title: 'Feather Icon', type: 'link' },
        { path: '/icon/whether-icon', title: 'Whether Icon', type: 'link' },
      ],
    },
    {
      title: 'Buttons',
      icon: 'cloud',
      type: 'sub',
      level: 1,
      active: false,
      children: [
        { path: '/button/default-style', title: 'Default Style', type: 'link' },
        { path: '/button/flat-style', title: 'Flat Style', type: 'link' },
        { path: '/button/edge-style', title: 'Edge Style', type: 'link' },
        { path: '/button/raised-style', title: 'Raised Style', type: 'link' },
        { path: '/button/button-group', title: 'Button Group', type: 'link' },
      ],
    },
    {
      title: 'Charts',
      icon: 'bar-chart',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/charts/apex-chart', title: 'Apex Chart', type: 'link' },
        { path: '/charts/google-chart', title: 'Google Chart', type: 'link' },
        { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link' },
        { path: '/charts/chartist', title: 'Chartist Chart', type: 'link' },
      ],
    },
    {
      headTitle1: 'Forms',
    },
    {
      title: 'Forms Controls',
      icon: 'sliders',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/forms-controls/validation',
          title: 'Form Validation',
          type: 'link',
        },
        { path: '/forms-controls/inputs', title: 'Base Inputs', type: 'link' },
        {
          path: '/forms-controls/checkbox-radio',
          title: 'Checkbox & Radio',
          type: 'link',
        },
        {
          path: '/forms-controls/input-groups',
          title: 'Input Groups',
          type: 'link',
        },
        {
          path: '/forms-controls/mega-options',
          title: 'Mega Options',
          type: 'link',
        },
      ],
    },
    {
      title: 'Forms Widgets',
      icon: 'package',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/forms-widgets/datepicker',
          title: 'Datepicker',
          type: 'link',
        },
        { path: '/forms-widgets/touchspin', title: 'Touchspin', type: 'link' },
        { path: '/forms-widgets/select2', title: 'Select2', type: 'link' },
        { path: '/forms-widgets/switch', title: 'Switch', type: 'link' },
        { path: '/forms-widgets/typeahead', title: 'Typeahead', type: 'link' },
        { path: '/forms-widgets/clipboard', title: 'Clipboard', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Default Forms',
      icon: 'layout',
      type: 'link',
      path: '/default-forms',
      active: false,
    },
    {
      headTitle1: 'Table',
    },
    {
      level: 1,
      path: '/bootstrap-tables',
      title: 'Bootstrap Tables',
      icon: 'server',
      type: 'link',
      active: false,
    },
    {
      level: 1,
      title: 'Data table',
      icon: 'database',
      active: false,
      type: 'link',
      bookmark: true,
      path: '/data-table',
    },
    {
      headTitle1: 'Applications',
    },
    {
      level: 1,
      title: 'Project',
      icon: 'box',
      type: 'sub',
      badgeType: 'danger',
      badgeValue: 'New',
      active: false,
      children: [
        { path: '/project/project-list', title: 'Project List', type: 'link' },
        { path: '/project/create-new', title: 'Create New', type: 'link' },
      ],
    },
    {
      level: 1,
      path: '/file-manager',
      title: 'File Manager',
      icon: 'git-pull-request',
      type: 'link',
    },
    {
      level: 1,
      title: 'Ecommerce',
      type: 'sub',
      icon: 'shopping-bag',
      active: false,
      children: [
        { path: '/ecommerce/product', title: 'Product', type: 'link' },
        { path: '/ecommerce/add-product', title: 'Add Product', type: 'link' },
        {
          path: '/ecommerce/product-page',
          title: 'Product page',
          type: 'link',
        },
        {
          path: '/ecommerce/product-list',
          title: 'Product List',
          type: 'link',
        },
        {
          path: '/ecommerce/payment-details',
          title: 'Payment Details',
          type: 'link',
        },
        {
          path: '/ecommerce/order-history',
          title: 'Order History',
          type: 'link',
        },
        { path: '/ecommerce/invoice', title: 'Invoice', type: 'link' },
        { path: '/ecommerce/cart', title: 'Cart', type: 'link' },
        { path: '/ecommerce/wishlist', title: 'Wishlist', type: 'link' },
        { path: '/ecommerce/checkout', title: 'Checkout', type: 'link' },
        { path: '/ecommerce/pricing', title: 'Pricing', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Email',
      icon: 'mail',
      type: 'sub',
      active: false,
      children: [
        { path: '/email/email-app', title: 'Email App', type: 'link' },
        { path: '/email/read-mail', title: 'Read Mail', type: 'link' },
        { path: '/email/email-compose', title: 'Email Compose', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Chat',
      icon: 'message-square',
      type: 'sub',
      children: [
        { path: '/chat/chat-app', title: 'Chat App', type: 'link' },
        { path: '/chat/video-chat', title: 'Video Chat', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Users',
      icon: 'users',
      type: 'sub',
      active: false,
      children: [
        { path: '/users/users-profile', title: 'User Profile', type: 'link' },
        { path: '/users/users-edit', title: 'User Edit', type: 'link' },
        { path: '/users/users-cards', title: 'Users Cards', type: 'link' },
      ],
    },
    {
      level: 1,
      path: '/bookmark',
      title: 'Bookmarks',
      icon: 'heart',
      type: 'link',
      bookmark: true,
    },
    {
      level: 1,
      path: '/contacts',
      title: 'Contact',
      icon: 'list',
      type: 'link',
      bookmark: true,
    },
    {
      level: 1,
      path: '/task',
      title: 'Tasks',
      icon: 'check-square',
      type: 'link',
      bookmark: true,
    },

    {
      level: 1,
      path: '/calender',
      title: 'Calender',
      icon: 'calendar',
      type: 'link',
    },
    {
      level: 1,
      path: '/social-app',
      title: 'Social App',
      icon: 'zap',
      type: 'link',
    },
    { level: 1, path: '/to-do', title: 'Todo', icon: 'clock', type: 'link' },
    {
      level: 1,
      path: '/search-website',
      icon: 'search',
      title: 'Search Result',
      type: 'link',
    },
    {
      headTitle1: 'Pages',
      headTitle2: 'All Neccesory Pages Added.',
    },
    {
      level: 1,
      path: '/sample-page',
      title: 'Sample Page',
      icon: 'file-text',
      type: 'link',
    },
    {
      title: 'Others',
      icon: 'layers',
      type: 'sub',
      level: 1,
      children: [
        {
          title: 'Error Pages',
          type: 'sub',
          active: false,
          level: 2,
          children: [
            { path: '/error-page/error1', title: 'Error Page 1', type: 'link' },
            { path: '/error-page/error2', title: 'Error Page 2', type: 'link' },
            { path: '/error-page/error3', title: 'Error Page 3', type: 'link' },
            { path: '/error-page/error4', title: 'Error Page 4', type: 'link' },
          ],
        },
        {
          title: 'Authentication',
          type: 'sub',
          active: false,
          level: 2,
          children: [
            {
              path: '/authentication/simple',
              title: 'Login Simple',
              type: 'link',
            },
            {
              path: '/authentication/image-one',
              title: 'Login with Bg image',
              type: 'link',
            },
            {
              path: '/authentication/image-two',
              title: 'Login with Image two',
              type: 'link',
            },
            {
              path: '/authentication/validation',
              title: 'Login with Validation',
              type: 'link',
            },
            {
              path: '/authentication/tooltip',
              title: 'Login with Tooltip',
              type: 'link',
            },
            {
              path: '/authentication/login-sweetalert',
              title: 'Login with Sweetalert',
              type: 'link',
            },
            {
              path: '/authentication/register-simple',
              title: 'Register Simple',
              type: 'link',
            },
            {
              path: '/authentication/register-image-one',
              title: 'Register with Bg image',
              type: 'link',
            },
            {
              path: '/authentication/register-image-two',
              title: 'Register with Bg video',
              type: 'link',
            },
            {
              path: '/authentication/unlock-user',
              title: 'Unlock User',
              type: 'link',
            },
            {
              path: '/authentication/forgot-password',
              title: 'Forgot Password',
              type: 'link',
            },
            {
              path: '/authentication/maintenance',
              title: 'Maintenance',
              type: 'link',
            },
          ],
        },
        {
          level: 2,
          title: 'Coming Soon',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/coming-soon/coming-soon-simple',
              title: 'Coming Simple',
              type: 'link',
            },
            {
              path: '/coming-soon/simple-with-bg-img',
              title: 'Coming with Bg video',
              type: 'link',
            },
            {
              path: '/coming-soon/simple-with-bg-video',
              title: 'Coming with Bg Image',
              type: 'link',
            },
          ],
        },
        {
          level: 2,
          title: 'Email templates',
          type: 'sub',
          active: false,
          children: [
            {
              path: 'http://admin.pixelstrap.com/viho/template/basic-template.html',
              title: 'Basic Email',
              type: 'extTabLink',
            },
            {
              path: 'http://admin.pixelstrap.com/viho/template/email-header.html',
              title: 'Basic With Header',
              type: 'extTabLink',
            },
            {
              path: 'http://admin.pixelstrap.com/viho/template/template-email.html',
              title: 'Ecomerce Template',
              type: 'extTabLink',
            },
            {
              path: 'http://admin.pixelstrap.com/viho/template/template-email-2.html',
              title: 'Email Template 2',
              type: 'extTabLink',
            },
            {
              path: 'http://admin.pixelstrap.com/viho/template/ecommerce-templates.html',
              title: 'Ecommerce Email',
              type: 'extTabLink',
            },
            {
              path: 'http://admin.pixelstrap.com/viho/template/email-order-success.html',
              title: 'Order Success',
              type: 'extTabLink',
            },
          ],
        },
      ],
    },
    {
      headTitle1: 'Miscellaneous',
      headTitle2: 'Bouns Pages & Apps.',
    },
    {
      level: 1,
      title: 'Gallery',
      icon: 'image',
      type: 'sub',
      active: false,
      children: [
        { path: '/gallery/gallery-grid', title: 'Gallery Grid', type: 'link' },
        {
          path: '/gallery/gallery-grid-desc',
          title: 'Gallery Grid Desc',
          type: 'link',
        },
        {
          path: '/gallery/masonry-gallery',
          title: 'Masonry Gallery',
          type: 'link',
        },
        {
          path: '/gallery/masonry-with-desc',
          title: 'Masonry With Desc',
          type: 'link',
        },
        { path: '/gallery/hover-effects', title: 'Hover Effect', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Blog',
      icon: 'film',
      type: 'sub',
      active: false,
      children: [
        { path: '/blog/blog-details', title: 'Blog Details', type: 'link' },
        { path: '/blog/blog-single', title: 'Single Blog', type: 'link' },
        { path: '/blog/add-post', title: 'Add Post', type: 'link' },
      ],
    },
    {
      level: 1,
      path: '/faq',
      title: 'FAQ',
      icon: 'help-circle',
      type: 'link',
      active: false,
    },
    {
      level: 1,
      title: 'Job Search',
      icon: 'package',
      type: 'sub',
      active: false,
      children: [
        { path: '/job-search/cards-view', title: 'Card View', type: 'link' },
        { path: '/job-search/list-view', title: 'List View', type: 'link' },
        { path: '/job-search/job-details', title: 'Job Details', type: 'link' },
        { path: '/job-search/apply', title: 'Apply', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Learning',
      icon: 'radio',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/learning/learning-list',
          title: 'Learning List',
          type: 'link',
        },
        {
          path: '/learning/detailed-course',
          title: 'Detailed Course',
          type: 'link',
        },
      ],
    },
    {
      level: 1,
      title: 'Maps',
      icon: 'map',
      type: 'sub',
      active: false,
      children: [
        { path: '/maps/map-js', title: 'Google Map', type: 'link' },
        { path: '/maps/leaflet-map', title: 'Leaflet', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Editors',
      icon: 'git-pull-request',
      active: false,
      type: 'sub',
      children: [
        { path: '/editors/ngx-editors', title: 'Ngx Editors', type: 'link' },
        { path: '/editors/mde-editors', title: 'MDE Editors', type: 'link' },
      ],
    },
    {
      level: 1,
      title: 'Knowledgebase',
      icon: 'database',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/knowledgebases/knowledgebase',
          title: 'Knowledgebase',
          type: 'link',
        },
        {
          path: '/knowledgebases/knowledge-category',
          title: 'Knowledge Category',
          type: 'link',
        },
        {
          path: '/knowledgebases/knowledge-detail',
          title: 'Knowledge Detail',
          type: 'link',
        },
      ],
    },
    {
      level: 1,
      path: '/support-ticket',
      title: 'Support Ticket',
      icon: 'headphones',
      active: false,
      type: 'link',
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
