import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { ProductComponent } from './componets/product/product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartModelComponent } from './cart-model/cart-model.component';
import { CartListComponent } from './componets/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    AddToCartComponent,
    CartModelComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
