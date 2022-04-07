import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProjectsRoutes} from "./projects.routing";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {CardModule} from "primeng/card";
import {TimelineModule} from "primeng/timeline";
import {DialogModule} from "primeng/dialog";
import { CommentComponent } from './components/comment/comment.component';
import {AppModule} from "../app.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FileUploadComponent} from "./components/file-upload/file-upload.component";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [
    ProjectDetailComponent,
    CommentComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    CardModule,
    TimelineModule,
    DialogModule,
    FontAwesomeModule,
    MatIconModule,
    MatProgressBarModule,

  ]
})
export class ProjectModule { }
