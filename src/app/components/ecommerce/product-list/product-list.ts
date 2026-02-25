import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, inject, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import * as data from '../../../shared/data/e-commerce/product-list';
import { ProductListDirective, SortEvent } from '../../../shared/directives/product-list.directive';
import { productList } from '../../../shared/interface/product-list';
import { ProductListService } from '../../../shared/services/ecommerce/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
  providers: [ProductListService, DecimalPipe],
  imports: [FormsModule, NgbPagination, AsyncPipe, RouterModule, AsyncPipe],
})
export class ProductList {
  service = inject(ProductListService);

  products$: Observable<productList[]>;
  total$: Observable<number>;
  public PRODUCTLIST = data.PRODUCTLIST;
  readonly headers = viewChildren(ProductListDirective);

  constructor() {
    const service = this.service;

    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach(header => {
      if (header.sortable() !== column) {
        header.currentDirection.set('');
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
