import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Project, Version} from "../models/project";
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {User} from "../../models/User";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";
import {uuidv4} from "../../helpers/utils.helper";
import {UtilisateurService} from "../../services/utilisateurs.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: Project;

  display: boolean[] = [];
  newVersionDisplay: boolean = false;

  currentVersion: string = null;
  test: String = "knqlbksblqbsqbslbc sojsjpsjscnsco";
  src: String = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp";
  faDownload = faDownload;

  teamMembers: User[];

  id = uuidv4();

  newVersion: Version = {
    comments: {comment: []},
    contenu: `${this.id}.pdf`,
    description: "",
    numero: "",
    publisher: this.utilisateurService.curentUser.uid,
    uid: this.id

  }


  constructor(private projectService: ProjectService, private userService: UsersService, private router: Router, private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {


    this.project = this.projectService.testProjectBig;


    if (!this.project) {
      this.router.navigate(['projects', 'dashboard'])
    }

    for (let i = 0; i < this.project.versions.version.length; i++) {
      this.display.push(false)
    }

    this.loadTeamMembersData()


  }

  onOpenCard(index: number) {
    if (!this.isAlreadyOpened()) {
      this.display[index] = true;
      this.currentVersion = this.project.versions.version[index].uid;

    }
  }

  onAddVersion() {
    this.projectService.testProjectBig.versions.version.push(this.newVersion)
    // this.projectService.updateProject()
  }

  addComment(comment: string, index: number) {
    if (this.currentVersion != null) {

      // this.projectService.addComment(this.currentVersion.ui, comment)
      this.projectService.addComment(this.currentVersion, comment, this.getUserId())
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
    this.teamMembers = this.userService.getUsersDataInArray(this.project.membres.uid)
  }

  getUserFromArrayByUIDOrDatabase(uid:string, team : User[]) : User{
    let res = team.filter(value => value.uid === uid)[0]
    if (res === undefined) {
      res = this.userService.getuserByUID(uid);
    }
    return res
  }

  onOpenAddVersion() {
    this.newVersionDisplay = true
  }

  getUserId() {
    return '1';
  }

  onDownloadRapport() {

  }
}
