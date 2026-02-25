import { Component } from '@angular/core';

import { PersonalDetails } from './personal-details/personal-details';
import { UploadFile } from './upload-file/upload-file';
import { YourEducation } from './your-education/your-education';
import { YourExperience } from './your-experience/your-experience';

@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.html',
  styleUrls: ['./apply-form.scss'],
  imports: [PersonalDetails, YourEducation, YourExperience, UploadFile],
})
export class ApplyForm {}
