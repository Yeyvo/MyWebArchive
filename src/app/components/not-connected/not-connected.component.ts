import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-not-connected',
  templateUrl: './not-connected.component.html',
  styleUrls: ['./not-connected.component.scss']
})
export class NotConnectedComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

}
