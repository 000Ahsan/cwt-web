import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-styles',
  templateUrl: './custom-styles.html',
  styleUrls: ['./custom-styles.scss'],

  imports: [FormsModule, NgClass],
})
export class CustomStyles {
  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}
