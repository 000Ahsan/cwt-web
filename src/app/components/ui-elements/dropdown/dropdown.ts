import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

import { DropdownBottomComponent } from './dropdown-bottom-component/dropdown-bottom-component';
import * as data from '../../../shared/data/ui-kits/dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.scss'],
  imports: [DropdownBottomComponent, TitleCasePipe],
})
export class Dropdown {
  public basicColorDropdown = data.basicColorDropdown;
}
