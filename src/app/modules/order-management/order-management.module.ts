import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderStatusManagementComponent } from './order-status-management/order-status-management.component';



@NgModule({
  declarations: [
    ViewOrdersComponent,
    OrderStatusManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderManagementModule { }
