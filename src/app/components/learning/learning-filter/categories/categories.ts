import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as filterData from '../../../../shared/data/learning/learning';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss'],
  imports: [NgbCollapse],
})
export class Categories {
  public isCollapsed = false;
  public Categories = filterData.Categories;
}
