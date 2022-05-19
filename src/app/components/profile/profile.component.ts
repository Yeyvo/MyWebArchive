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
      this.projects = this.projectService.getAllProjectsTeacher(this.user.uid);
    } else {
      this.projects = this.projectService.getAllProjectsStudent(this.user.uid);
    }
  }

  onLoadProjectData(i: number) {
    this.projectService.LoadProjectData(this.projects[i]['uid'])
  }

}
