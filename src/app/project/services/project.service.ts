import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {



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
    this.testProjectBig = this.allProjects.find((e) => {
      return e.uid == projectId
    })
  }

  addComment(currentVersionId: string, comment: string, userId: string) {

    this.testProjectBig.versions.version.find(e => e.uid === currentVersionId)
      .comments.comment.push({
      prof: userId,
      contenu: comment
    })
    this.updateProject(this.testProjectBig);
    // console.log(currentVersion, comment)
  }

  getAllProjects(uid: string, isStudent: boolean) {
    return this.http.get(`${environment.baseURL}/api/projects/`).pipe(map((res: Project[]) => {
      console.log('----------------------------------- : ', res)
      let projs: Project[] = []
      if (isStudent) {
        projs = res.filter((e) => {
          return e.membres.uid.indexOf(uid) != -1;
        })
        this.allProjects = projs;
      } else {
        projs = res.filter((e) => {
          return e.profId == uid;
        })
        this.allProjects = projs;
      }
      return projs
    }));

    // .subscribe((res: Project[]) => {
    //
    // })

    // return [this.testProject,this.testProject,this.testProject2];
  }


  updateProject(p: Project) {
    this.http.put(`${environment.baseURL}/api/projects/`, p)
  }

  createProject(p: Project) {
    this.http.post(`${environment.baseURL}/api/projects/`, p)
  }

  generatePDF() {
    this.http.get(`${environment.baseURL}/api/projects/rapport`).subscribe(() => {
      window.open(`${environment.baseURL}/projects.pdf`, "_blank");
    })
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
