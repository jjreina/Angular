import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopping-cart-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderShoppingCartComponent {
  private cartOrProduct: boolean = true;

  @Output()
  toggleCartVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();

  onCartClicked(): void {
    if (this.cartOrProduct) {
      this.toggleCartVisibility.emit(!this.cartOrProduct);
    } else {
      this.toggleCartVisibility.emit(!this.cartOrProduct);
    }
  }
}
