import { ChangeDetectorRef, Component, OnInit, TemplateRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Products } from '../../../../shared/model/product.model';
import { ProductService } from '../../../../shared/services/ecommerce/product.service';
import { ProductBoxFilterService } from '../../../../shared/services/product/product-box-filter.service';
import { QuickView } from '../quick-view/quick-view';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.html',
  styleUrls: ['./product-box.scss'],
  imports: [RouterLink, QuickView],
})
export class ProductBox implements OnInit {
  private ProductService = inject(ProductService);
  private modalService = inject(NgbModal);
  private ProductBoxFilterService = inject(ProductBoxFilterService);
  private cd = inject(ChangeDetectorRef);

  public productDetail?: Products;

  product!: string;
  listData: Products[] = [];

  sidebaron: boolean = false;
  show: boolean = false;
  open: boolean = false;
  public listView: boolean = false;
  public col_xl_12: boolean = false;
  public col_xl_2: boolean = false;

  public col_sm_3: boolean = false;
  public col_xl_3: boolean = true;
  public xl_4: boolean = true;
  public col_sm_4: boolean = false;
  public col_xl_4: boolean = false;
  public col_sm_6: boolean = true;
  public col_xl_6: boolean = false;
  public gridOptions: boolean = true;
  public active: boolean = false;

  openMediaFilter() {
    this.show = !this.show;
    this.sidebaron = !this.sidebaron;
    this.open = !this.open;
  }

  openProductDetail(content: TemplateRef<NgbModal>, id: number) {
    this.ProductService.getProduct(id).subscribe(product => {
      if (product) {
        this.productDetail = product; // assign to the property, not @Output
        this.modalService.open(content, { centered: true, size: 'lg' });
      }
    });
  }

  ngOnInit() {
    this.ProductService.products().subscribe(data => {
      this.listData = data;
    });
  }

  ngDoCheck() {
    this.col_xl_12 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_2 = this.ProductBoxFilterService.col_xl_2;
    this.col_sm_3 = this.ProductBoxFilterService.col_xl_12;
    this.col_xl_3 = this.ProductBoxFilterService.col_xl_3;
    this.xl_4 = this.ProductBoxFilterService.xl_4;
    this.col_sm_4 = this.ProductBoxFilterService.col_sm_4;
    this.col_xl_4 = this.ProductBoxFilterService.col_xl_4;
    this.col_sm_6 = this.ProductBoxFilterService.col_sm_6;
    this.col_xl_6 = this.ProductBoxFilterService.col_xl_6;
  }
}
