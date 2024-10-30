import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ViewUsersComponent } from './user-management/view-users/view-users.component';
import { RolesAndPermissionComponent } from './user-management/roles-and-permission/roles-and-permission.component';

const Admins: Route [] = [
 {
  path: 'view-users',
  component: ViewUsersComponent
 },
 {
  path: 'roles-and-permission',
  component: RolesAndPermissionComponent
 }
]

@NgModule({
  declarations: [
  
    ViewUsersComponent,
       RolesAndPermissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Admins)
  ]
})
export class AdminsModule { }
