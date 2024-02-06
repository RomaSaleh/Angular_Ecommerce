import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from '../products/component/product-details/product-details.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectCategoryComponent,
    ProductDetailsComponent,
    FooterComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[HeaderComponent,SpinnerComponent,SelectCategoryComponent,FormsModule,FooterComponent]
})
export class SharedModule { }
