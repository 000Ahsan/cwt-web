import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.html',
  styleUrls: ['./clock.scss'],
  imports: [SvgIconComponent, DatePipe],
})
export class Clock implements OnInit, OnDestroy {
  today: Date = new Date();

  hourRotation: string = '';
  minRotation: string = '';
  secRotation: string = '';

  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.updateClock();
    this.intervalId = setInterval(() => {
      this.today = new Date();
      this.updateClock();
    }, 1000);
  }

  private updateClock(): void {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    this.secRotation = `rotate(${seconds * 6}deg)`;
    this.minRotation = `rotate(${minutes * 6}deg)`;
    this.hourRotation = `rotate(${hours * 30 + minutes / 2}deg)`;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
