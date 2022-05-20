import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {AuthService} from "../../services/auth.service";
import {Project} from "../models/project";
import {uuidv4} from "../../helpers/utils.helper";
import {UtilisateurService} from "../../services/utilisateurs.service";

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss']
})
export class ProjectsDashboardComponent implements OnInit {

  teachers = [];
  items = [];
  selected = [];


  projects: Project[];
  newProject: boolean = false;

  constructor(public projectService: ProjectService, private authService: AuthService, private utilisateursService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.projectService.getAllProjects('test@test.com', false).subscribe((res) => {
      this.projects = res;
    });


    this.utilisateursService.getAllStudents().subscribe((res) => {
      this.items = res.map((x) => {
        return {id: x.uid, name: `${x.displayName} (${x.uid})`}
      })
      this.selected.push({
        id: this.utilisateursService.curentUser.uid,
        name: `${this.utilisateursService.curentUser.displayName} (${this.utilisateursService.curentUser.uid})`
      })
    })
    // this.projects = this.projectService.allProjects;

    this.utilisateursService.getAllTeachers().subscribe((res) => {
      this.teachers = res.map((x) => {
        return {mail: x.uid, nom: `${x.displayName} (${x.uid})`}
      })
    })

  }

  onLoadProjectData(i: number) {
    this.projectService.LoadProjectData(this.projects[i].uid)
  }

  onOpenAddProject() {
    this.newProject = true
  }

  onAddProject(name: string, desc: string,) {
    // TODO add all data + add form validation
    let p: Project = {
      comments: {comment: []},
      description: desc,
      membres: {uid: []},
      motscles: {motcle: []},
      note: 0,
      profId: "",
      status: "",
      titre: name,
      type: "",
      uid: uuidv4(),
      versions: {version: []}

    }
    this.projectService.createProject(p);

  }
}
