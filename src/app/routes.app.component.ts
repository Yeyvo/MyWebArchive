import {Routes} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {ProjectsDashboardComponent} from "./project/projects-dashboard/projects-dashboard.component";
import {FourOhFourComponent} from "./components/four-oh-four/four-oh-four.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {LoginComponent} from "./components/login/login.component";

export const appRoutes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.UsersModule)
  },

  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: '404', component: FourOhFourComponent},
  {path: '**', redirectTo:'/404'}
];
