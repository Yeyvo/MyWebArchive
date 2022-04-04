import {Injectable} from '@angular/core';
import {ProjectBig, ProjectSmall} from "../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  testProject: ProjectSmall = {
    'uid': 'e6f955ze6dd262',
    'name': 'XML-project',
    'teamMembers': ['16511', '654664'],
    'description': "un systeme de gestion de version de projet",
    'tags': ['XML', 'SPRING']
  };

  testProject2: ProjectSmall = {
    'uid': 'e6f955ze6dd262',
    'name': 'XML-project',
    'teamMembers': ['16511', '654664'],
    'description': "un systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projetun systeme de gestion de version de projet",
    'tags': ['XML', 'SPRING']
  };


  testProjectBig: ProjectBig;

  constructor() {
  }

  /**
   * @param uuid of teacher
   *
   * @return array of projects
   * */
  getAllProjectsTeacher(teacherUUID): ProjectSmall[] {
    return [this.testProject2, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject]
  }

  LoadProjectData(projectElement: string) {
    this.testProjectBig = {

      'uid': 'e6f955ze6dd262',
      'name': 'XML-project',
      'teamMembers': ['16511', '654664'],
      'description': "un systeme de gestion de version de projet",
      'tags': ['XML', 'SPRING'],
      versions: [{
        'datePush': new Date(2005, 5, 1),
        'publisherUID': '54166',
        'versionNumber': '0.1.1',
        'dataURL': 'dfgj',
        'modifications': "CORE SYSTEM UPGRADE",
        'comments': [
          {
            data: "this is null",
            dateComment: new Date(2005, 5, 5),
            ispublisherTeacher: true,
            publisherUID: "11111"
          }, {
            data: "No sir",
            dateComment: new Date(2005, 5, 5),
            ispublisherTeacher: false,
            publisherUID: "00000"
          }, {
            data: "yes it is",
            dateComment: new Date(2005, 5, 5),
            ispublisherTeacher: true,
            publisherUID: "11111"
          },
        ]
      },
        {
          'datePush': new Date(2005, 6, 1),
          'publisherUID': '54166',
          'versionNumber': '1.0.1',
          'dataURL': 'fghjkl',
          'modifications': "UI UPGRADE",
        },
        {
          'datePush': new Date(2005, 7, 1),
          'publisherUID': '54166',
          'versionNumber': '1.1.1',
          'dataURL': 'fghjkl',
          'modifications': "Final project",
        },

      ],
    };
  }

  addComment(currentVersion: string, comment: string) {
    console.log(currentVersion, comment)
  }
}
