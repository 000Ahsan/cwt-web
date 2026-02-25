import { Component } from '@angular/core';

import { BtnNesting } from './btn-nesting/btn-nesting';
import { BtnVertical } from './btn-vertical/btn-vertical';
import { CheckBoxBtnGroup } from './check-box-btn-group/check-box-btn-group';
import { OutlineButtonGroup } from './outline-button-group/outline-button-group';
import { OutlineCustomBtnGroup } from './outline-custom-btn-group/outline-custom-btn-group';
import { OutlineCustomBtnGroup2 } from './outline-custom-btn-group2/outline-custom-btn-group2';
import { OutlineEdgesBtn } from './outline-edges-btn/outline-edges-btn';
import { OutlineFlatButton } from './outline-flat-button/outline-flat-button';
import { RadioBtnGroup } from './radio-btn-group/radio-btn-group';
import { RoundBtnGroup } from './round-btn-group/round-btn-group';
import { SquareBtnGroup } from './square-btn-group/square-btn-group';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.html',
  styleUrls: ['./button-group.scss'],
  imports: [
    SquareBtnGroup,
    RoundBtnGroup,
    OutlineCustomBtnGroup2,
    OutlineCustomBtnGroup,
    OutlineButtonGroup,
    OutlineEdgesBtn,
    OutlineFlatButton,
    RadioBtnGroup,
    CheckBoxBtnGroup,
    BtnNesting,
    BtnVertical,
  ],
})
export class ButtonGroup {}
