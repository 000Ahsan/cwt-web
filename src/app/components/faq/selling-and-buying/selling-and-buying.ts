import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-selling-and-buying',
  templateUrl: './selling-and-buying.html',
  styleUrls: ['./selling-and-buying.scss'],
  imports: [FeatherIcons, NgbCollapse],
})
export class SellingAndBuying {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
}
