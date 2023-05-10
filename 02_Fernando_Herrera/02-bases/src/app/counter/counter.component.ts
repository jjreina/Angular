import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseCounter()">Add</button>
    <button (click)="decreaseCounter()">Subtract</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="behaviorCounter(1)">+1</button>
    <button (click)="behaviorCounter(-1)">-1</button>
  `
})

export class CounterComponent {
  protected counter: number = 10
  constructor() { }

  increaseCounter = (): void => { this.counter++ }

  decreaseCounter = (): void => { this.counter-- }

  resetCounter = (): void => { this.counter = 0 }

  behaviorCounter = (value: number): void => {
    this.counter += value
  }
}
