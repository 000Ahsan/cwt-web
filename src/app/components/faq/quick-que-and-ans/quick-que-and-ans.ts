import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-quick-que-and-ans',
  templateUrl: './quick-que-and-ans.html',
  styleUrls: ['./quick-que-and-ans.scss'],
  imports: [FeatherIcons, NgbCollapse],
})
export class QuickQueAndAns {
  public isCollapsed = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;
  public isCollapsed4 = true;
  public isCollapsed5 = true;
}
