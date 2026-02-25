import { Component } from '@angular/core';

import { AnimatedCheckboxBtn } from './animated-checkbox-btn/animated-checkbox-btn';
import { AnimatedRadioBtn } from './animated-radio-btn/animated-radio-btn';

@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.html',
  styleUrls: ['./checkbox-radio.scss'],
  imports: [AnimatedRadioBtn, AnimatedCheckboxBtn],
})
export class CheckboxRadio {}
