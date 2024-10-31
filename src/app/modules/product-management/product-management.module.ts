import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { FormsModule } from '@angular/forms';


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
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FuseCardModule,
    FormsModule,

    RouterModule.forChild(prodManagement)
  ]
})
export class ProductManagementModule { }
