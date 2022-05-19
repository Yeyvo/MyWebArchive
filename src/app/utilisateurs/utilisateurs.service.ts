import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Utilisateurs } from './utilisateurs';
import { UTIISATEURS } from './mock-utilisateurs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUtilisateurs(): Observable<Utilisateurs[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UtilisaterusService: fetched utilisateurs');
    return of(UTIISATEURS);
  }

  getUtilisateur(email: string) {
    return this.getUtilisateurs().pipe(
      // (+) before `id` turns the string into a number
      map((utilisateurs: Utilisateurs[]) => utilisateurs.find(Utilisateurs => Utilisateurs.email === email)!)
    );
  }

  /** GET user by id. Will 404 if id not found  */
  getUtilisateurbyid(id: number | string): Observable<Utilisateurs> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<Utilisateurs>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<Utilisateurs>(`getUser id=${id}`))
    );
  }
/** add get userprojects   */

  /** GET users from the server */
  getAllUtilisateurs(): Observable<Utilisateurs[]> {
    return this.http.get<Utilisateurs[]>(this.usersUrl)
      .pipe(
        tap(_ => this.log('fetched utilisateurs')),
        catchError(this.handleError<Utilisateurs[]>('getUsers', []))
      );
  }
  /** POST: add a new user to the server */
  addUtilisateur(utilisateurs: Utilisateurs): Observable<Utilisateurs> {
    return this.http.post<Utilisateurs>(this.usersUrl, utilisateurs, this.httpOptions).pipe(
      tap((newuser: Utilisateurs) => this.log(`added user w/ email=${newuser.email}`)),
      catchError(this.handleError<Utilisateurs>('addUser'))
    );
  }

  /** PUT: update the user on the server */
  updateUtilisateurs(utilisateurs: Utilisateurs): Observable<any> {
    return this.http.put(this.usersUrl, utilisateurs, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${utilisateurs.email}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }


  /** DELETE: delete the user from the server */
  deleteUtilisateur(email: string): Observable<Utilisateurs> {
    const url = `${this.usersUrl}/${email}`;
    return this.http.delete<Utilisateurs>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user email=${email}`)),
      catchError(this.handleError<Utilisateurs>('deleteUser'))
    );
  }

  /** upload file */
  // Returns an observable
  upload(file):Observable<Utilisateurs> {
  
    // Create form data
    const formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    // with formData as req
    return this.http.post<Utilisateurs>(this.usersUrl, formData)
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a userService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UtilisateursService: ${message}`);
  }
}