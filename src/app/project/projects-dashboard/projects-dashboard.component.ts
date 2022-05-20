import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {AuthService} from "../../services/auth.service";
import {Project} from "../models/project";

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss']
})
export class ProjectsDashboardComponent implements OnInit {

  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP', disabled: true},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];
  selected = [
    {id: 2, name: 'Node Js'},
    {id: 8, name: 'ReactJs'}
  ];


  projects: Project[];
  newProject: boolean = false;

  constructor(public projectService: ProjectService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.projectService.getAllProjects(this.authService['uuid'], false);
    this.projects = this.projectService.allProjects;
  }

  onLoadProjectData(i: number) {
    this.projectService.LoadProjectData(this.projects[i].uid)
  }

  onOpenAddProject() {
    this.newProject = true
  }

  onAddProject() {

  }
}
