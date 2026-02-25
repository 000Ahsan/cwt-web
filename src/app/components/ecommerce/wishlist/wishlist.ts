import { Component, OnInit, inject } from '@angular/core';

import { NgbRating, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../shared/model/product.model';
import { ProductService } from '../../../shared/services/ecommerce/product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss'],
  imports: [NgbRating],
})
export class Wishlist implements OnInit {
  ProductService = inject(ProductService);
  config = inject(NgbRatingConfig);

  listData: Products[] = [];

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  // whishlist data
  ngOnInit(): void {
    this.ProductService.products().subscribe(data => {
      this.listData = data;
    });
  }
}
