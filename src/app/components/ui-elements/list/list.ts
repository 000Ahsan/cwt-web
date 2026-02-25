import { Component } from '@angular/core';

import { BtnList } from './btn-list/btn-list';
import { ClassList } from './class-list/class-list';
import { CustomList } from './custom-list/custom-list';
import { DefaultList } from './default-list/default-list';
import { FlushStyle } from './flush-style/flush-style';
import { IconList } from './icon-list/icon-list';
import { ImgList } from './img-list/img-list';
import { JsList } from './js-list/js-list';
import { RoundedImgList } from './rounded-img-list/rounded-img-list';
import { WithBadges } from './with-badges/with-badges';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
  imports: [
    DefaultList,
    BtnList,
    FlushStyle,
    ClassList,
    WithBadges,
    CustomList,
    JsList,
    IconList,
    ImgList,
    RoundedImgList,
  ],
})
export class List {}
