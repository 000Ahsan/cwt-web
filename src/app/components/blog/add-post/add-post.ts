import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';
import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.html',
  styleUrls: ['./add-post.scss'],
  imports: [FormsModule, NgSelectModule, NgxEditorModule, DropzoneModule],
})
export class AddPost implements OnInit {
  public editor: Editor;
  public html = '';
  selectedCity: string;
  selectedCityIds: string[] = [];
  selectedCityName = 'Vilnius';
  selectedCityId: number = 0;
  selectedUserIds: number[] = [];
  public textDefault =
    '<i class="icon-cloud-up"></i><h6 class="mb-0">Drop files here or click to upload.</h6>';

  files: File[] = [];
  public category = [
    { id: 1, name: 'Life Style' },
    { id: 2, name: 'Travel' },
  ];
  public selectedCategory: string[] = [];

  public config = {
    name: 'document',
    groups: ['mode', 'document', 'doctools'],
  };

  cities2 = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys', disabled: true },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];
  cities4!: { id: number; name: string }[];

  constructor() {
    this.create10kCities();
  }

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

  addCustomUser = (term: string) => ({ id: term, name: term });
  private create10kCities() {
    this.cities4 = Array.from({ length: 10000 }, (value, key) => key).map(val => ({
      id: val,
      name: `city ${val}`,
    }));
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
