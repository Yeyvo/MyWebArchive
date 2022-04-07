import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  getUsersDataInArray(teamMembers: string[]) {
    let res : User[] = [];

    for (const uid of teamMembers) {
      let data : User = this.getuserByUID(uid)
      if(data !== undefined){
        res.push(data)
      }
    }

    return res;
  }

  getuserByUID(uid: string) : User{
    return {
      uid : uid,
      displayName : "Amine",
      email: "test@test.com",
      isTeacher: false,
      ImageURL: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp",
      permissionLevel: 0

    }
  }


}
