import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  currentProject: Project = null;

  allProjects: Project[] = [];

  testProject: Project = {
    "uid": '1',
    "titre": "projet-1",
    "note": 20,
    "description": "this is a description",
    "motscles": {
      "motcle": [
        "JAVA",
        "WEB"
      ]
    },
    "comments": {
      "comment": [
        {
          "prof": "prof1",
          "contenu": "contenu comment"
        },
        {
          "prof": "prof2",
          "contenu": "contenu comment"
        }
      ]
    },
    "versions": {
      "version": [
        {
          "uid": '1',
          "publisher": '2',
          "numero": '1',
          "description": "this is a description",
          "comments": {
            "comment": [
              {
                "prof": "prof1",
                "contenu": "contenu comment"
              },
              {
                "prof": "prof1",
                "contenu": "contenu comment"
              }
            ]
          },
          "contenu": "projet1version1.pdf"
        },
        {
          "uid": '2',
          "description": "this is a description",
          "publisher": '2',
          "numero": '2',
          "comments": {
            "comment": [
              {
                "prof": "prof1",
                "contenu": "contenu comment"
              },
              {
                "prof": "prof1",
                "contenu": "contenu comment"
              }
            ]
          },
          "contenu": "projet1version2.pdf"
        }
      ]
    },
    "membres": {
      "uid": [
        '1',
        '2'
      ]
    },
    "profId": '2',
    "status": "FINI",
    "type": "PROJET_INTEGRE"
  };

  testProject2: Project = this.testProject;


  testProjectBig: Project;

  constructor(public http: HttpClient) {
  }

  /**
   * @param uuid of teacher
   *
   * @return array of projects
   * */
  // getAllProjectsTeacher(teacherUUID): Project[] {
  //   return [this.testProject2, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject, this.testProject]
  // }

  LoadProjectData(projectId: string) {
    this.testProjectBig = this.testProject2;
    this.testProjectBig = this.allProjects.find((e) => {
      return e.uid == projectId
    })
    console.log("##################################", this.allProjects)
  }

  addComment(currentVersionId: string, comment: string, userId: string) {
    this.currentProject.versions.version.find(e => e.uid === currentVersionId)
      .comments.comment.push({
      prof: userId,
      contenu: comment
    })
    this.updateProject(this.currentProject);
    // console.log(currentVersion, comment)
  }

  getAllProjects(uid: string, isStudent: boolean) {
    this.http.get("localhost:3000/api/projects/").subscribe((res: Project[]) => {
      if (isStudent) {
        this.allProjects = res.filter((e) => {
          e.uid = uid
        })
      } else {
        this.allProjects = res.filter((e) => {
          e.profId = uid
        })
      }
    })

    // return [this.testProject,this.testProject,this.testProject2];
  }


  updateProject(p: Project) {
    this.http.put("localhost:3000/api/projects/", p)
  }


//
// constructor(public http: HttpClient) {
// }
//
// public createEvent(name: string) {
//   return this.http.post(`${environment.apiURL}/events/create`,name)//?eventName=${name}
//     .pipe(map((event: Evenement) => event));
// }
//
// public getAllEvents() {
//   return this.http.get(`${environment.apiURL}/events/all`,)
//     .pipe(map((events: Evenement[]) => events));
// }
//
// public removeEvent(eventId: number) {
//   return this.http.delete(`${environment.apiURL}/events/remove?eventId=${eventId}`)
//     .pipe(map((response: string) => response));
// }
//
// public getEvent(eventId: number) {
//   return this.http.get(`${environment.apiURL}/events/find?eventId=${eventId}`)
//     .pipe(map((ev: Evenement) => ev));
// }
}
