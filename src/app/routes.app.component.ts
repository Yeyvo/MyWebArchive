import {Routes} from "@angular/router";
import {ProjectComponent} from "./project/project.component";
import {ProjectsDashboardComponent} from "./project/projects-dashboard/projects-dashboard.component";

export const appRoutes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  },

  // {path: 'projects', component: ProjectsDashboardComponent},
  // {path: '**', redirectTo:'/projects/da'}
];
