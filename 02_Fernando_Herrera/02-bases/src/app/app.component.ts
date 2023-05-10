import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public title: string = 'My first app';
  public counter: number = 10;

  increaseCounter = (): void => { this.counter++ }

  decreaseCounter = (): void => { this.counter-- }

  resetCounter = (): void => { this.counter = 0 }

  behaviorCounter = (value: number): void => {
    this.counter += value
  }



}
