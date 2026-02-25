import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.html',
  styleUrls: ['./clipboard.scss'],
  imports: [FormsModule],
})
export class Clipboard {
  private _clipboardService = inject(ClipboardService);

  clipboardExample1: string = '';
  copyHighlightTxt: string = 'dolor sit amet';
  clipboardExample2: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has";
  basic = false;
  paragraphData =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  copyText = '';

  ngOnInit(): void {
    this._clipboardService.copyResponse$.subscribe(re => {
      if (re.isSuccess) {
        alert('copy success!');
      }
    });
  }
  callServiceToCopy() {
    this._clipboardService.copy('This is copy thru service copyFromContent directly');
  }

  onCut() {}
  onCopyFailure() {
    alert('copy fail!');
  }
  copyFunction(txt: string) {
    navigator.clipboard.writeText(txt);
  }
  cutFunction(id: string) {
    switch (id) {
      case 'clipboardExample1':
        navigator.clipboard.writeText(this.clipboardExample1);
        this.clipboardExample1 = '';
        break;
      case 'clipboardExample2':
        navigator.clipboard.writeText(this.clipboardExample2);
        this.clipboardExample2 = '';
        break;
      default:
        break;
    }
  }
}
