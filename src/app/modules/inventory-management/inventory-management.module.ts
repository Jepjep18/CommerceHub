import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockLevelsComponent } from './stock-levels/stock-levels.component';
import { LowStockAlertsComponent } from './low-stock-alerts/low-stock-alerts.component';



@NgModule({
  declarations: [
  
    StockLevelsComponent,
       LowStockAlertsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryManagementModule { }
