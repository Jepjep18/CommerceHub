import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { OrderStatusManagementComponent } from './order-status-management/order-status-management.component';
import { Route , RouterModule } from '@angular/router';

const OrderManagement: Route[] = [
  {
    path: 'view-orders',
    component: ViewOrdersComponent
  },
  {
    path: 'order-status-management',
    component: OrderStatusManagementComponent
  }
]

@NgModule({
  declarations: [
    ViewOrdersComponent,
    OrderStatusManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OrderManagement)
  ]
})
export class OrderManagementModule { }
