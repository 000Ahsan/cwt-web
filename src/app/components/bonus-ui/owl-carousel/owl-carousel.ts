import { Component } from '@angular/core';

import { AnimateOwl } from './animate-owl/animate-owl';
import { AutoHeightOwl } from './auto-height-owl/auto-height-owl';
import { AutoPlayOwl } from './auto-play-owl/auto-play-owl';
import { AutoWidthOwl } from './auto-width-owl/auto-width-owl';
import { BasicOwl } from './basic-owl/basic-owl';
import { CenterOwl } from './center-owl/center-owl';
import { EventsOwl } from './events-owl/events-owl';
import { LazyLoadOwl } from './lazy-load-owl/lazy-load-owl';
import { MergeOwl } from './merge-owl/merge-owl';
import { MouseWheelOwl } from './mouse-wheel-owl/mouse-wheel-owl';
import { NavigationsOwl } from './navigations-owl/navigations-owl';
import { ResponsiveOwl } from './responsive-owl/responsive-owl';
import { RightToLeftOwl } from './right-to-left-owl/right-to-left-owl';
import { StagePaddingOwl } from './stage-padding-owl/stage-padding-owl';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.html',
  styleUrls: ['./owl-carousel.scss'],
  imports: [
    BasicOwl,
    ResponsiveOwl,
    CenterOwl,
    MergeOwl,
    AutoWidthOwl,
    NavigationsOwl,
    EventsOwl,
    StagePaddingOwl,
    RightToLeftOwl,
    LazyLoadOwl,
    AnimateOwl,
    AutoPlayOwl,
    AutoHeightOwl,
    MouseWheelOwl,
  ],
})
export class OwlCarousel {}
