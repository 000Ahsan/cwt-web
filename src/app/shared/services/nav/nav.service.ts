import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject, map } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../core/models/auth.model';

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
  role?: UserRole[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private router = inject(Router);
  private authService = inject(AuthService);

  private unsubscriber: Subject<void> = new Subject<void>();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);
  private url = new BehaviorSubject<string>('default message');
  currentUrl = this.url.asObservable();

  fullScreen: boolean = false;
  public language: boolean = false;
  public collapseSidebar: boolean = window.innerWidth < 991;
  public horizontal: boolean = window.innerWidth >= 991;
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
    // Contractor Menus
    {
      level: 1,
      title: 'Dashboard',
      icon: 'home',
      type: 'link',
      path: '/contractor/dashboard',
      role: [UserRole.CONTRACTOR]
    },
    {
      level: 1,
      title: 'Projects',
      icon: 'box',
      type: 'link',
      path: '/contractor/projects',
      role: [UserRole.CONTRACTOR]
    },
    {
      level: 1,
      title: 'Workers',
      icon: 'users',
      type: 'link',
      path: '/contractor/workers',
      role: [UserRole.CONTRACTOR]
    },
    {
      level: 1,
      title: 'Summaries',
      icon: 'file-text',
      type: 'sub',
      active: false,
      role: [UserRole.CONTRACTOR],
      children: [
        { path: '/contractor/reports/daily', title: 'Daily Summary', type: 'link' },
        { path: '/contractor/reports/weekly', title: 'Weekly Summary', type: 'link' },
      ],
    },

    {
      level: 1,
      title: 'Assigned Projects',
      icon: 'box',
      type: 'link',
      path: '/worker/projects',
      role: [UserRole.WORKER]
    },
    {
      level: 1,
      title: 'Work Session',
      icon: 'clock',
      type: 'link',
      path: '/worker/session',
      role: [UserRole.WORKER]
    },
    {
      level: 1,
      title: 'My Daily History',
      icon: 'calendar',
      type: 'link',
      path: '/worker/history',
      role: [UserRole.WORKER]
    },
  ];

  items = new BehaviorSubject<Menu[]>([]);

  // Call this after login or on app init
  public refreshMenu() {
    const user = this.authService.currentUserValue;
    if (!user) {
      this.items.next([]);
      return;
    }

    const filteredItems = this.MENUITEMS.filter(item => {
      return !item.role || item.role.includes(user.role);
    });

    this.items.next(filteredItems);
  }
}
