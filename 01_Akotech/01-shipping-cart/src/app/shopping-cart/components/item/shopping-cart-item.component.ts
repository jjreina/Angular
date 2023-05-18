import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css'],
})
export class ShoppingCartItemComponent {
  @Input('cartItem')
  cartItem: CartItem = {
    imageUrl: '',
    name: '',
    price: 0,
  };

  @Output()
  cartItemDelete = new EventEmitter<void>();

  public onDeleteClicked(): void {
    this.cartItemDelete.emit();
  }
}
