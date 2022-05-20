import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateursDetailComponent } from './utilisateurs-detail/utilisateurs-detail.component';
import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';

const utilisateursroutes: Routes = [
  { path: 'utilisateurs', redirectTo: '/userslist' },
  { path: 'utilisateur/:uid', redirectTo: '/userdetail/:uid' },
  { path: 'userslist', component: UtilisateursListComponent, data: { animation: 'utilisateurs' } },
  { path: 'userdetail/:uid', component: UtilisateursDetailComponent, data: { animation: 'utilisateur' } }

];

@NgModule({
  imports: [RouterModule.forChild(utilisateursroutes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
