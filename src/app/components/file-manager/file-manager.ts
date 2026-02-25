import { Component } from '@angular/core';

import { FileItems } from './file-items/file-items';
import { FileManagerSidebar } from './file-manager-sidebar/file-manager-sidebar';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.html',
  styleUrls: ['./file-manager.scss'],
  imports: [FileManagerSidebar, FileItems],
})
export class FileManager {}
