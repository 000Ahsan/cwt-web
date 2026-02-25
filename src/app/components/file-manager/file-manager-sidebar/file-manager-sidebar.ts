import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-file-manager-sidebar',
  templateUrl: './file-manager-sidebar.html',
  styleUrls: ['./file-manager-sidebar.scss'],
  imports: [FeatherIcons],
})
export class FileManagerSidebar {
  OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
