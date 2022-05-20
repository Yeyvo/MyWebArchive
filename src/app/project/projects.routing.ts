import {Routes} from '@angular/router';
import {ProjectsDashboardComponent} from "./projects-dashboard/projects-dashboard.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectComponent} from "./project.component";
import {AuthGuardGuard} from "../helpers/auth-guard.guard";


export const ProjectsRoutes: Routes = [{
  path: '',
  component: ProjectComponent,
  canActivate: [AuthGuardGuard],
  children: [
    {
      path: 'detailProject',
      component: ProjectDetailComponent, // ->   /projects/detailProject
      canActivate: [AuthGuardGuard],
    },
    {
      path: 'dashboard',
      component: ProjectsDashboardComponent, // ->   /projects/dashboard
      canActivate: [AuthGuardGuard],
    }
  ]
}];
