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
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ProjectsDashboardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
