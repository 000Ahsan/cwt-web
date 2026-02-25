import { Component } from '@angular/core';

import { DescriptionCategory } from './description-category/description-category';
import { SizeImage } from './size-image/size-image';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.scss'],
  imports: [DescriptionCategory, SizeImage],
})
export class AddProduct {}
