import {Routes} from "@angular/router";
import {FourOhFourComponent} from "./components/four-oh-four/four-oh-four.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {NotConnectedComponent} from "./components/not-connected/not-connected.component";
import {AuthGuard} from "@auth0/auth0-angular";

export const appRoutes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },


  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'login', component: NotConnectedComponent},
  {path: '404', component: FourOhFourComponent},
  {path: '**', redirectTo: '/404'}
];
