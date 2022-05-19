import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {ProjectsDashboardComponent} from './project/projects-dashboard/projects-dashboard.component';
import {SidebarComponent} from "./components/includes/sidebar/sidebar.component";
import {NavbarComponent} from "./components/includes/navbar/navbar.component";
import {FooterComponent} from "./components/includes/footer/footer.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {appRoutes} from "./routes.app.component";
import {ProjectComponent} from './project/project.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FourOhFourComponent} from './components/four-oh-four/four-oh-four.component';

import {LoginComponent} from './components/login/login.component';
import {ProfileComponent} from './components/profile/profile.component';


import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// import { UtilisateursListComponent } from './utilisateurs/utilisateurs-list/utilisateurs-list.component';
// import { UtilisateursDetailComponent } from './utilisateurs/utilisateurs-detail/utilisateurs-detail.component';
import {UtilisateursModule} from './utilisateurs/utilisateurs.module';
import {UtilisateursListComponent} from "./utilisateurs/utilisateurs-list/utilisateurs-list.component";
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsDashboardComponent,
    ProjectComponent,
    FourOhFourComponent,
    LoginComponent,
    ProfileComponent,
    UtilisateursListComponent,
    //UtilisateursDetailComponent,

  ],
  imports: [
    BrowserModule,
    // RouterModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatButtonToggleModule,
    UtilisateursModule,
    DialogModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
