import { Component } from '@angular/core';

import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIcons } from '../../../../../shared/components/feather-icons/feather-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.scss'],
  imports: [NgbCollapse, FeatherIcons],
})
export class AboutMe {
  public isProfile = false;
}
