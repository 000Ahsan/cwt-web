import { Component } from '@angular/core';

import { FeatherIcons } from '../../../shared/components/feather-icons/feather-icons';
import * as navig from '../../../shared/data/faq/faq';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss'],
  imports: [FeatherIcons],
})
export class Navigation {
  public navigation = navig.navigation;
}
