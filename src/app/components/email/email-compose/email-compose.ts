import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { Editor, NgxEditorModule } from 'ngx-editor';

import { MailFilter } from '../mail-filter/mail-filter';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.html',
  styleUrls: ['./email-compose.scss'],
  imports: [MailFilter, FormsModule, NgxEditorModule, DropzoneModule],
})
export class EmailCompose implements OnInit {
  public editor: Editor;
  public html = '';
  public textDefault =
    '<i class="icon-cloud-up"></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  public default: DropzoneConfigInterface = {
    clickable: true,
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
