import { Component } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  cartItems: CartItem[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Headphones',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Keyboard',
      price: 14.5,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 199.99,
    },
  ];

  public deleteItem(itemToDelete: CartItem): void {
    console.log(itemToDelete.name);
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }

  public total(): number {
    // return this.cartItems.reduce((acc, item) => (acc = +item.price), 0);
    // Destructuring
    return this.cartItems.reduce((acc, { price }) => (acc = +price), 0);
  }
}
