import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { Route, RouterModule } from '@angular/router';


const prodManagement : Route[] = [
  {
    path: 'view-products',
    component: ViewProductsComponent
  },
  {
    path: 'add-products',
    component: AddProductsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  }
]

@NgModule({
  declarations: [
    ViewProductsComponent,
    AddProductsComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodManagement)
  ]
})
export class ProductManagementModule { }
