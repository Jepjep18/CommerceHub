import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Route, RouterModule } from '@angular/router';


const Dashboard : Route [] = [
  {
    path: '',
    component: DashboardComponent
  }
]


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Dashboard)
  ]
})
export class DashboardModule { }
