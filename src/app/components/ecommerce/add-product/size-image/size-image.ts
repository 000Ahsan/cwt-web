import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-size-image',
  templateUrl: './size-image.html',
  styleUrls: ['./size-image.scss'],
  imports: [FormsModule, DropzoneModule],
})
export class SizeImage {
  public textDefault =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  public default: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    parallelUploads: 1,
  };
}
