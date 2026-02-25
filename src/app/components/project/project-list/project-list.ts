import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as projectData from '../../../shared/data/project/project-list';
import { Project } from '../../../shared/interface/product-list';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.html',
  styleUrls: ['./project-list.scss'],
  imports: [NgClass, FeatherIcons, RouterLink, TranslateModule],
})
export class ProjectList {
  active = 1;
  public openTab: string = 'All';

  // data
  public ProjectLists = projectData.ProjectList;
  listUser: Project[] = [];
  filterData = this.ProjectLists;

  constructor() {}

  // data filter ALL DONE DOING
  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== 'All'
        ? this.ProjectLists.filter((data: { badge: string }) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
