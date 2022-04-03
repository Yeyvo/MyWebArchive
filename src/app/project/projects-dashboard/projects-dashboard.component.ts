import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {Project} from "../models/project";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss']
})
export class ProjectsDashboardComponent implements OnInit {

  projects: Project[];

  constructor(public projectService: ProjectService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjectsTeacher(this.authService['uuid']);
  }

}
