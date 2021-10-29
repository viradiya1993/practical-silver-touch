import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './componets/cart-list/cart-list.component';
import { ProductComponent } from './componets/product/product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'cart-list', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
