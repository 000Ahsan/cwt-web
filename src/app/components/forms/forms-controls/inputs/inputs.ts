import { Component } from '@angular/core';

import { BasicFormControl } from './basic-form-control/basic-form-control';
import { BasicHtmlInputControl } from './basic-html-input-control/basic-html-input-control';
import { CustomControls } from './custom-controls/custom-controls';
import { EdgesInputStyle } from './edges-input-style/edges-input-style';
import { FlatInputStyle } from './flat-input-style/flat-input-style';
import { InputSizing } from './input-sizing/input-sizing';
import { RaiseInputStyle } from './raise-input-style/raise-input-style';
import { SolidInputStyle } from './solid-input-style/solid-input-style';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.html',
  styleUrls: ['./inputs.scss'],
  imports: [
    BasicFormControl,
    BasicHtmlInputControl,
    EdgesInputStyle,
    FlatInputStyle,
    RaiseInputStyle,
    SolidInputStyle,
    InputSizing,
    CustomControls,
  ],
})
export class Inputs {}
