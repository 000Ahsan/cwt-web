import { Component } from '@angular/core';

import { DefaultFormLayout } from './default-form-layout/default-form-layout';
import { HorizontalFormLayout } from './horizontal-form-layout/horizontal-form-layout';
import { InlineForm } from './inline-form/inline-form';
import { MegaForm } from './mega-form/mega-form';

@Component({
  selector: 'app-default-forms',
  templateUrl: './default-forms.html',
  styleUrls: ['./default-forms.scss'],
  imports: [DefaultFormLayout, MegaForm, HorizontalFormLayout, InlineForm],
})
export class DefaultForms {}
