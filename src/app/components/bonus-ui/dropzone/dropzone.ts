import { Component } from '@angular/core';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.html',
  styleUrls: ['./dropzone.scss'],
  imports: [DropzoneModule],
})
export class Dropzone {
  public configSingle: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    uploadMultiple: false,
    maxFiles: 1,
    parallelUploads: 1,
  };

  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    uploadMultiple: true,
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public default: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    uploadMultiple: true,
    parallelUploads: 1,
  };

  public textSignle =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public textMulti =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
  public textDefault =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';
}
