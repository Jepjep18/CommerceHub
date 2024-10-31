import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BuyItemComponent } from './buy-item/buy-item.component';
import { RouterModule, Route } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FuseCardModule } from '@fuse/components/card';
import { FormsModule } from '@angular/forms';

// Define routes for Product Management
const prodManagementRoutes: Route[] = [
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
  },
  {
    path: 'buy-item', // Ensure you have the buy-item route configured
    component: BuyItemComponent
  }
];

@NgModule({
  declarations: [
    ViewProductsComponent,
    AddProductsComponent,
    CategoriesComponent,
    BuyItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodManagementRoutes), // Move RouterModule to the top for clarity
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    FuseCardModule,
    FormsModule
  ]
})
export class ProductManagementModule { }
