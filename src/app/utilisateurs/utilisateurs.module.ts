import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';

import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';
import { UtilisateursDetailComponent } from './utilisateurs-detail/utilisateurs-detail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    //UtilisateursListComponent,
    UtilisateursDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UtilisateursRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})
export class UtilisateursModule { }
