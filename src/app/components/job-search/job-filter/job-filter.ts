import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import * as filterData from '../../../shared/data/job-search/job-serach';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.html',
  styleUrls: ['./job-filter.scss'],
  imports: [NgbCollapse],
})
export class JobFilter {
  public filter = filterData.filter;
  public filterChackBox = filterData.filterChackBox;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
