import { Component } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { ShoppingCardService } from '../services/shopping-cart-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  constructor(private shoppingCardService: ShoppingCardService) {}

  get cartItems(): CartItem[] {
    return [...this.shoppingCardService.cartItems];
  }

  onDeleteItem(item: CartItem): void {
    this.shoppingCardService.deleteItem(item);
  }

  onTotalCalculta(items: CartItem[]): number {
    return this.shoppingCardService.totalCalculate(items);
  }
}
