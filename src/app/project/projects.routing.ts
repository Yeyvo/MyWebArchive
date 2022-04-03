import {Routes} from '@angular/router';
import {ProjectsDashboardComponent} from "./projects-dashboard/projects-dashboard.component";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";
import {ProjectComponent} from "./project.component";


export const ProjectsRoutes: Routes = [{
  path: '',
  component:ProjectComponent,
  children: [
    {
      path: 'detailProject',
      component : ProjectDetailComponent // ->   /projects/detailProject
    },
    {
      path: 'dashboard',
      component : ProjectsDashboardComponent // ->   /projects/dashboard
    }
  ]
}];
