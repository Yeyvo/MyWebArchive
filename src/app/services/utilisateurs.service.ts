import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import {Utilisateurs} from '../utilisateurs/utilisateurs';
import {UTIISATEURS} from '../utilisateurs/mock-utilisateurs';
import {MessageService} from '../utilisateurs/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {

  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  curentUser: Utilisateurs = {
    displayName: "Hamza CHAFAKAN",
    email: "test@test",
    imageUrl: "",
    mle: "",
    niveauetudes: "",
    type: ""
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getUtilisateurs(): Observable<Utilisateurs[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UtilisaterusService: fetched utilisateurs');
    return of(UTIISATEURS);
  }

  // getUtilisateur(email: string) {
  //   return this.getUtilisateurs().pipe(
  //     // (+) before `id` turns the string into a number
  //     map((utilisateurs: Utilisateurs[]) => utilisateurs.find(Utilisateurs => Utilisateurs.email === email)!)
  //   );
  // }

  /** GET hero by id. Will 404 if id not found */
  getUtilisateurbyuid(uid: string): Observable<Utilisateurs> {
    const userid ='http://localhost:3000/api/users/id';
    const url = `${userid}/${uid}`;
    return this.http.get<Utilisateurs>(url).pipe(
      tap(_ => this.log(`fetched user uid=${uid}`)),
      catchError(this.handleError<Utilisateurs>(`getUser uid=${uid}`))
    );
  }

  // /** GET user by id. Will 404 if id not found  */
  // getUtilisateurbyid(uid:  string): Observable<Utilisateurs> {
  //   const url = `${http://localhost:3000/api/users/getuser/{uid}}/${id}`;
  //   return this.http.get<Utilisateurs>(url).pipe(
  //     tap(_ => this.log(`fetched user uid=${uid}`)),
  //     catchError(this.handleError<Utilisateurs>(`getUser uid=${uid}`))
  //   );
  // }

  /** GET users from the server */
  getAllUtilisateurs(): Observable<Utilisateurs[]> {
    // return this.http.get<Utilisateurs[]>("http://localhost:3010/api/users/getAll")
    //   .pipe(
    //     tap(_ => this.log('fetched utilisateurs')),
    //     catchError(this.handleError<Utilisateurs[]>('getUsers', []))
    //   );
    return this.http.get(`http://localhost:3000/api/users/getAll`).pipe(map((res: Utilisateurs[])=>{
    return res;
    }))



  }
  /** POST: add a new user to the server */
  addUtilisateur(utilisateurs: Utilisateurs): Observable<Utilisateurs> {
    return this.http.post<Utilisateurs>("http://localhost:3010/api/users/adduser", utilisateurs, this.httpOptions).pipe(
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


  getAllTeachers() {
    return this.http.get(`${environment.baseURL}/api/users/allProfs`).pipe(map((res: Utilisateurs[]) => {
      return res
    }));
  }

  getAllStudents() {
    return this.http.get(`${environment.baseURL}/api/users/allStudents`).pipe(map((res: Utilisateurs[]) => {
      return res
    }));
  }

  getUserById(id: string) {
    return this.http.get(`${environment.baseURL}/api/users/allStudents`).pipe(map((res: Utilisateurs) => {
      return res
    }));
  }


  /** upload file */
  // Returns an observable
  upload(file): Observable<Utilisateurs> {
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
