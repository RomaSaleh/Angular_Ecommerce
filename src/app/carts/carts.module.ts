import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartserComponent } from './service/cartser/cartser.component';



@NgModule({
  declarations: [
    CartComponent,
    CartserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
