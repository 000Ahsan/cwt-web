import { Component, inject, input } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../../shared/model/product.model';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.html',
  styleUrls: ['./quick-view.scss'],
  imports: [RouterLink],
})
export class QuickView {
  private router = inject(Router);
  private ngb = inject(NgbModal);

  public counter: number = 1;

  readonly productDetail = input<Products>();

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngb.dismissAll();
      }
    });
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }
}
