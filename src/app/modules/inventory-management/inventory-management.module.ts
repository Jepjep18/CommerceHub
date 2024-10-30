import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockLevelsComponent } from './stock-levels/stock-levels.component';
import { LowStockAlertsComponent } from './low-stock-alerts/low-stock-alerts.component';
import { Route ,RouterModule } from '@angular/router';


const inventoryManagement: Route[] = [
  {
    path : 'stock-levels',
    component: StockLevelsComponent,
  },
  {
    path: 'low-stock-alerts',
    component: LowStockAlertsComponent
  }
]


@NgModule({
  declarations: [
  
    StockLevelsComponent,
       LowStockAlertsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(inventoryManagement)
  ]
})
export class InventoryManagementModule { }
