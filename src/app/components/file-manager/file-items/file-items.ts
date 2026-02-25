import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as fileData from '../../../shared/data/file-manager/file-manager';

@Component({
  selector: 'app-file-items',
  templateUrl: './file-items.html',
  styleUrls: ['./file-items.scss'],
  imports: [FeatherIcons],
})
export class FileItems {
  // data
  public Quickdata = fileData.Quickdata;
  public FoldersData = fileData.FoldersData;
  public FilesData = fileData.FilesData;
  active = 1;
}
