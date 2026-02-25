import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-browser-defaults',
  templateUrl: './browser-defaults.html',
  styleUrls: ['./browser-defaults.scss'],
  imports: [FormsModule],
})
export class BrowserDefaults {
  public validate = false;
  public tooltipValidation = false;

  public submit() {
    this.validate = !this.validate;
  }
  public tooltipSubmit() {
    this.tooltipValidation = !this.tooltipValidation;
  }
}
