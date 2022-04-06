import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import {RouterModule} from "@angular/router";
import { UsersRoutes } from './users.routing';


@NgModule({
  declarations: [
  
    UsersComponent,
       UsersDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),

  ]
})
export class UsersModule { }
