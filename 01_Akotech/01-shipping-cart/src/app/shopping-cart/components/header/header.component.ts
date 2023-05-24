import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopping-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderShoppingCartComponent {
  private cartOrProduct: boolean = true;

  @Output()
  toggleCartVisibility: EventEmitter<void> = new EventEmitter<void>();

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }
}
