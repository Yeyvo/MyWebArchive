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
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    HttpClientModule

  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
