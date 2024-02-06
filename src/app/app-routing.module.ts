import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from 'src/app/products/component/all-product/all-product.component';
import { ProductDetailsComponent } from 'src/app/products/component/product-details/product-details.component';
import { CartComponent } from 'src/app/carts/components/cart/cart.component';
import { NotFoundError } from 'rxjs';
import { PageNotFoundComponent } from './products/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'Products', component:AllProductComponent },
  {path:'Details/:id', component:ProductDetailsComponent},
  {path:'Cart',component:CartComponent},
  {path:'', redirectTo:'/Products',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
