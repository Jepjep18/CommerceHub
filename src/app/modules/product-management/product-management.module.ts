import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    ViewProductsComponent,
    AddProductsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductManagementModule { }
