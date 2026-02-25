import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Filter } from './filter/filter';
import { ProductBox } from './product-box/product-box';
import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import { ProductBoxFilterService } from '../../../shared/services/product/product-box-filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  imports: [FeatherIcons, FormsModule, Filter, ProductBox],
})
export class Product {
  private ProductBoxFilterService = inject(ProductBoxFilterService);

  listView: boolean = false;
  openSidebar: boolean = false;
  OpenFilter: Boolean = false;

  gridOpens() {
    this.listView = false;
    this.ProductBoxFilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.ProductBoxFilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.ProductBoxFilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.ProductBoxFilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.ProductBoxFilterService.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
