import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user : User;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
  }

}
