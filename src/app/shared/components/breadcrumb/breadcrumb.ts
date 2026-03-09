import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RouterLink } from '@angular/router';

import { map } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.html',
  styleUrls: ['./breadcrumb.scss'],
  imports: [RouterLink],
})
export class Breadcrumb {
  public breadcrumbs?: {
    parentBreadcrumb?: string | null;
    childBreadcrumb?: string;
  } | null;
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  public title: string = '';

  constructor() {
    this.updateBreadcrumbs();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumbs();
      });
  }

  private updateBreadcrumbs() {
    let route = this.activatedRoute.root;
    let breadcrumbData: string[] = [];
    let title = '';

    let currentRoute: ActivatedRoute | null = route;
    while (currentRoute) {
      const data = currentRoute.snapshot.data;
      if (data['breadcrumb']) {
        breadcrumbData.push(data['breadcrumb']);
      }
      if (data['title']) {
        title = data['title'];
      }
      currentRoute = currentRoute.firstChild;
    }

    this.title = title;
    this.breadcrumbs = {
      parentBreadcrumb: breadcrumbData.length > 1 ? breadcrumbData[breadcrumbData.length - 2] : null,
      childBreadcrumb: breadcrumbData.length > 0 ? breadcrumbData[breadcrumbData.length - 1] : undefined,
    };
  }
}
