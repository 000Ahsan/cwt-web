import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Editor, NgxEditorModule } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editors',
  templateUrl: './ngx-editors.html',
  styleUrl: './ngx-editors.scss',
  imports: [NgxEditorModule, FormsModule],
})
export class NgxEditors {
  public editor: Editor;
  public html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
