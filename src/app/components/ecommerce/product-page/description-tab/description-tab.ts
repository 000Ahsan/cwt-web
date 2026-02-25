import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-description-tab',
  templateUrl: './description-tab.html',
  styleUrls: ['./description-tab.scss'],
  imports: [NgClass],
})
export class DescriptionTab {
  public openTab: string = 'febric';

  public tabbed(val: string) {
    this.openTab = val;
  }
}
