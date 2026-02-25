import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as BootstrapData from '../../../../shared/data/bonus-ui/bootsrap-notify';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  imports: [FormsModule],
})
export class Select {
  public Bootstrap = BootstrapData.Bootstrap;
  public select = BootstrapData.select;
  public icon = BootstrapData.icon;
}
