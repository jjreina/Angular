import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/components/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/components/item/shopping-cart-item.component';
import { HeaderShoppingCartComponent } from './shopping-cart/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    HeaderShoppingCartComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
