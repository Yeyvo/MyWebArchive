import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {ProjectBig} from "../models/project";
import {PrimeIcons} from "primeng/api";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: ProjectBig;

  display: boolean[] = [];
  newVersionDisplay : boolean = false;

  currentVersion: string = null;
  test: String = "knqlbksblqbsqbslbc sojsjpsjscnsco";
  src: String = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp";
  faDownload = faDownload;

  teamMembers : User[];


  constructor(private projectService: ProjectService, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.project = this.projectService.testProjectBig;


    for (let i = 0; i < this.project['versions'].length; i++) {
      this.display.push(false)
    }

    this.loadTeamMembersData()
    console.log('teamMember :' , this.teamMembers)
  }

  onOpenCard(versionNumber: any, index: number) {
    if (!this.isAlreadyOpened()) {
      this.display[index] = true;
      this.currentVersion = versionNumber;

    }
  }

  onAddVersion() {

  }

  addComment(comment: string, index: number) {
    if (this.currentVersion != null) {
      this.projectService.addComment(this.currentVersion, comment)
      this.display[index] = false

    }
  }

  isAlreadyOpened() {
    return this.display.indexOf(true) !== -1 || this.newVersionDisplay == true;
  }

  downloadVersion(url){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  private loadTeamMembersData() {
    this.teamMembers = this.userService.getUsersDataInArray(this.project.teamMembers)
  }

  getUserFromArrayByUIDOrDatabase(uid:string, team : User[]) : User{
    let res = team.filter(value => value.uid ===uid)[0]
    if(res === undefined){
      res = this.userService.getuserByUID(uid);
    }
    return res
  }

  onOpenAddVersion() {
    this.newVersionDisplay = true
  }
}
