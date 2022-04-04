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



@NgModule({
  declarations: [
    ProjectDetailComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    CardModule,
    TimelineModule,
    DialogModule,
    FontAwesomeModule,
  ]
})
export class ProjectModule { }
