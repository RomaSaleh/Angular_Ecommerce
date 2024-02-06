import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AllProductComponent } from './products/component/all-product/all-product.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ProductComponent } from './products/component/product/product.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CarouselComponent } from './products/component/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductComponent,
    ProductComponent,
    CartComponent,
    CarouselComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
