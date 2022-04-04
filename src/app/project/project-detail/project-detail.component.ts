import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../services/project.service";
import {ProjectBig} from "../models/project";
import {PrimeIcons} from "primeng/api";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  project: ProjectBig;

  display: boolean[] = [];

  currentVersion: string = null;
  test: String = "knqlbksblqbsqbslbc sojsjpsjscnsco";
  src: String = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp";
  faDownload = faDownload;


  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.project = this.projectService.testProjectBig;


    for (let i = 0; i < this.project['versions'].length; i++) {
      this.display.push(false)
    }

  }

  onOpenCard(versionNumber: any, index: number) {
    if (!this.isAlredyOpened()) {
      this.display[index] = true;
      this.currentVersion = versionNumber;

    }
  }

  onAddVersion() {

  }

  addComment(comment: string, index: number) {
    if (this.currentVersion != null) {
      this.projectService.addComment(this.currentVersion, comment)
      this.display[index] = false

    }
  }

  isAlredyOpened() {
    return this.display.indexOf(true) !== -1;
  }

  downloadVersion(url){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', url);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
