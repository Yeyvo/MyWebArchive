import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Utilisateurs } from './utilisateurs';
import { UTIISATEURS } from './mock-utilisateurs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {

  constructor(private messageService: MessageService) { }

  getUtilisateurs(): Observable<Utilisateurs[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UtilisaterusService: fetched utilisateurs');
    return of(UTIISATEURS);
  }

  getUtilisateur(id: number | string) {
    return this.getUtilisateurs().pipe(
      // (+) before `id` turns the string into a number
      map((utilisateurs: Utilisateurs[]) => utilisateurs.find(Utilisateurs => Utilisateurs.id === +id)!)
    );
  }
}