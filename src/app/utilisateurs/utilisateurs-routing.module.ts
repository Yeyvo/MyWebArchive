import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilisateursDetailComponent } from './utilisateurs-detail/utilisateurs-detail.component';
import { UtilisateursListComponent } from './utilisateurs-list/utilisateurs-list.component';

const utilisateursroutes: Routes = [
  { path: 'utilisateurs', redirectTo: '/userslist' },
  { path: 'utilisateur/:id', redirectTo: '/userdetail/:id' },
  { path: 'userslist', component: UtilisateursListComponent, data: { animation: 'utilisateurs' } },
  { path: 'userdetail/:id', component: UtilisateursDetailComponent, data: { animation: 'utilisateur' } }

];

@NgModule({
  imports: [RouterModule.forChild(utilisateursroutes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }
