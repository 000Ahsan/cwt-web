import { Component } from '@angular/core';

import { WidgetsProductData } from '../../../../shared/data/widgets/data';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.html',
  styleUrls: ['./product-cart.scss'],
  imports: [],
})
export class ProductCart {
  public widgetsProductData = WidgetsProductData;
}
