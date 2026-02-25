import { Component } from '@angular/core';

import { EmployeeStatusData } from '../../../../shared/data/widgets/data';

@Component({
  selector: 'app-employee-status',
  templateUrl: './employee-status.html',
  styleUrls: ['./employee-status.scss'],
})
export class EmployeeStatus {
  public EmployeeStatusData = EmployeeStatusData;
}
