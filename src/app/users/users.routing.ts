import {Routes} from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersComponent } from './users.component';



export const UsersRoutes: Routes = [{
  path: '',
  component:UsersComponent,
  children: [
    {
      path: 'usersdashboard',
      component : UsersDashboardComponent // ->   /users/usersdashboard
    },
    {
      path: 'userdetail',
      component : UserDetailComponent // ->   /users/userdetail
    },
  ]
}];
