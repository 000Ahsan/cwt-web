import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import * as feather from 'feather-icons';

import { slider } from '../../../data/animation/animation';
import { LayoutService } from '../../../services/layout/layout.service';
import { NavService } from '../../../services/nav/nav.service';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { Sidebar } from '../../sidebar/sidebar';

@Component({
  selector: 'app-content',
  templateUrl: './content.html',
  styleUrls: ['./content.scss'],
  animations: [slider],
  imports: [NgClass, Header, Sidebar, RouterOutlet, Footer],
})
export class Content {
  navServices = inject(NavService);
  layout = inject(LayoutService);
  route = inject(ActivatedRoute);
  private cdref = inject(ChangeDetectorRef);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.layout.config.settings.layout = params['layout']
        ? params['layout']
        : this.layout.config.settings.layout;
    });
  }

  public getRouterOutletState(outlet: RouterOutlet): unknown {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  get layoutClass() {
    return (
      this.layout.config.settings.sidebar_type +
      ' ' +
      this.layout.config.settings.layout.replace('layout', 'sidebar')
    );
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    this.cdref.detectChanges();
    feather.replace();
  }
}
