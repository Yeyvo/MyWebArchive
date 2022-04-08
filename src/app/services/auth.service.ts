import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//   user = {
//     'uuid':'54451'
// }

  currentUser = {
    uid : '54451',
    displayName : "Amine",
    email: "test@test.com",
    isTeacher: false,
    ImageURL: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
    permissionLevel: 0
  }



  constructor() { }


  logOut() {

  }
}
