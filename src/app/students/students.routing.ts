import {Routes} from '@angular/router';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsComponent } from './students.component';



export const UsersRoutes: Routes = [{
  path: '',
  component:StudentsComponent,
  children: [
    {
      path: 'studentsdashboard',
      component : StudentsDashboardComponent // ->   /students/studentsdashboard
    },

  ]
}];
