import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Loader } from './shared/components/loader/loader';
import { NavService } from './shared/services/nav/nav.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private navService = inject(NavService);
  title = 'crewtrack';

  ngOnInit() {
    this.navService.refreshMenu();
  }
}
