import { Component } from '@angular/core';

import { ActiveDisabledLink } from './active-disabled-link/active-disabled-link';
import { DefaultNav } from './default-nav/default-nav';
import { InlineNav } from './inline-nav/inline-nav';
import { ItemBullets } from './item-bullets/item-bullets';
import { SectionSeparator } from './section-separator/section-separator';
import { SubNav } from './sub-nav/sub-nav';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.html',
  styleUrls: ['./navs.scss'],
  imports: [DefaultNav, ItemBullets, SectionSeparator, ActiveDisabledLink, InlineNav, SubNav],
})
export class Navs {}
