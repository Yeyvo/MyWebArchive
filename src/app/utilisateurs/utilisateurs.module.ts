import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UtilisateursRoutingModule } from './utilisateurs-routing.module';

import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';
import { UtilisateursDetailComponent } from './utilisateurs-detail/utilisateurs-detail.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import { RegistrationComponent } from './registration/registration.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        //UtilisateursListComponent,
        UtilisateursDetailComponent,
        RegistrationComponent
    ],
  exports: [
    UtilisateursDetailComponent,
    RegistrationComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    FormsModule,
    UtilisateursRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ]
})
export class UtilisateursModule { }
