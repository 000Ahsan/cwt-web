import { Component } from '@angular/core';

import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.html',
  styleUrls: ['./filter.scss'],
  imports: [NgxSliderModule],
})
export class Filter {
  openSidebar: boolean = false;
  value2: number = 100;
  maxvalue: number = 70;

  constructor() {}

  owlcarousel1ptions = {
    items: 1,
    margin: 30,
    loop: true,
    pagination: true,
    dots: false,
    nav: true,
  };

  options: Options = {
    floor: 0,
    ceil: 200,
  };

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
}
