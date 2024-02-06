import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './component/all-product/all-product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ProductComponent } from './component/product/product.component';
import { CarouselComponent } from './component/carousel/carousel.component';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    ProductComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductsModule { }
