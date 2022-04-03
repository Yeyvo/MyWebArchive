import { Injectable } from '@angular/core';
import {Project} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  testProject: Project = {
    'uid': 'e6f955ze6dd262',
    'name': 'XML-project',
    'teamMembers': ['16511', '654664'],
    'description': "un systeme de gestion de version de projet",
    'tags': ['XML','SPRING']
  };

  testProject2: Project = {
    'uid': 'e6f955ze6dd262',
    'name': 'XML-project',
    'teamMembers': ['16511', '654664'],
    'description': "un systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projet",
    'tags': ['XML','SPRING']
  };

  constructor() {
  }

  /**
   * @param uuid of teacher
   *
   * @return array of projects
   * */
  getAllProjectsTeacher(teacherUUID): Project[] {
    return [this.testProject2, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject]
  }
}
