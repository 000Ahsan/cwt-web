import { Component } from '@angular/core';

import { FeatherIcons } from '../../../../shared/components/feather-icons/feather-icons';
import { EarningDatas } from '../../../../shared/data/widgets/data';

@Component({
  selector: 'app-earning-data',
  templateUrl: './earning-data.html',
  styleUrls: ['./earning-data.scss'],
  imports: [FeatherIcons],
})
export class EarningData {
  public earningData = EarningDatas;
}
