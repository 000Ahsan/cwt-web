import { Component } from '@angular/core';

import { UploadFile } from './upload-file/upload-file';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.html',
  styleUrls: ['./create-new.scss'],
  imports: [UploadFile],
})
export class CreateNew {}
