import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { UsersRoutes } from './students.routing';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
@NgModule({
  declarations: [

    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UsersRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class UsersModule { }
