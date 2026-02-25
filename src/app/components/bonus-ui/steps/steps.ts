import { Component } from '@angular/core';

import { DefaultPearlsSteps } from './default-pearls-steps/default-pearls-steps';
import { DefaultStep } from './default-step/default-step';
import { PearlsStepIcon } from './pearls-step-icon/pearls-step-icon';
import { PearlsStepSizing } from './pearls-step-sizing/pearls-step-sizing';
import { PearlsStepStates } from './pearls-step-states/pearls-step-states';
import { StepIcon } from './step-icon/step-icon';
import { StepSizing } from './step-sizing/step-sizing';
import { StepStates } from './step-states/step-states';
import { VerticalStep } from './vertical-step/vertical-step';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.html',
  styleUrls: ['./steps.scss'],
  imports: [
    DefaultStep,
    StepIcon,
    StepStates,
    StepSizing,
    VerticalStep,
    DefaultPearlsSteps,
    PearlsStepIcon,
    PearlsStepSizing,
    PearlsStepStates,
  ],
})
export class Steps {}
