import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {Project} from "../../project/models/project";
import {ProjectService} from "../../project/services/project.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  projects: Project[];

  constructor(public authService: AuthService, public projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    if (this.user.isTeacher) {
      this.projectService.getAllProjects(this.user.uid, false);
    } else {
      this.projectService.getAllProjects(this.user.uid, true);
    }
    this.projects = this.projectService.allProjects;
  }

  onLoadProjectData(i: number) {
    this.projectService.LoadProjectData(this.projects[i]['uid'])
  }

}
