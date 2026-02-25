import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Select } from './select/select';
import * as BootstrapData from '../../../shared/data/bonus-ui/bootsrap-notify';

@Component({
  selector: 'app-bootstrap-notify',
  templateUrl: './bootstrap-notify.html',
  styleUrls: ['./bootstrap-notify.scss'],
  imports: [Select, FormsModule],
})
export class BootstrapNotify {
  public Bootstrap = BootstrapData.Bootstrap;
  public btnNotify = BootstrapData.btnNotify;
  public select = BootstrapData.select;
  public icon = BootstrapData.icon;
}
