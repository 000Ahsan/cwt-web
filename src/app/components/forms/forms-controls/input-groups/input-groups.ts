import { Component } from '@angular/core';

import { BasicInputGroups } from './basic-input-groups/basic-input-groups';
import { BasicInputGroups2 } from './basic-input-groups2/basic-input-groups2';

@Component({
  selector: 'app-input-groups',
  templateUrl: './input-groups.html',
  styleUrls: ['./input-groups.scss'],
  imports: [BasicInputGroups2, BasicInputGroups],
})
export class InputGroups {}
