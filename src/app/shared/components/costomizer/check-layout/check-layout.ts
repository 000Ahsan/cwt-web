import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-check-layout',
  templateUrl: './check-layout.html',
  styleUrls: ['./check-layout.scss'],
  imports: [RouterLink],
})
export class CheckLayout {
  public checkLayout: string = '';
}
