import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.html',
  styleUrls: ['./add-bookmark.scss'],
  imports: [FormsModule, ReactiveFormsModule],
})
export class AddBookmark {
  activeModal = inject(NgbActiveModal);
  private fd = inject(FormBuilder);

  addBookmarkForm: FormGroup;
  public closeResult!: string;
  public modalOpen: boolean = false;

  constructor() {
    this.addBookmarkForm = new FormGroup({
      webUrl: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      collection: new FormControl(),
    });
  }

  resetFields() {
    this.addBookmarkForm = this.fd.group({
      webUrl: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      collection: new FormControl('', Validators.required),
    });
  }
}
