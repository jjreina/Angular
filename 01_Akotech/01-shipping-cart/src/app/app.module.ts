import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartItemComponent } from './shopping-cart/components/item/shopping-cart-item.component';
import { HeaderShoppingCartComponent } from './shopping-cart/components/header/header.component';
import { ShoppingCartComponent } from './shopping-cart/components/shopping-cart/shopping-cart.component';
import { CatalogProductComponent } from './shopping-cart/components/catalog-product/catalog-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    HeaderShoppingCartComponent,
    CatalogProductComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
