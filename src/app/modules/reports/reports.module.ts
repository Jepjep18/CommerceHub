import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { Route , RouterModule } from '@angular/router';

const Reports : Route [] = [
  {
    path: 'reports',
    component: ReportsComponent
  }
]

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Reports)
  ]
})
export class ReportsModule { }
