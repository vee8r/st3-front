import {Component, Inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {Lesson} from "../../course/Lesson";
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {NgForOf} from "@angular/common";
import {AddResourceComponent} from "../add-resource/add-resource.component";
import {ResourceService} from "../../../service/lessons/resource.service";

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatButton,
    MatDivider,
    MatList,
    MatListItem,
    MatLine,
    NgForOf
  ],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.scss'
})
export class LessonDetailsComponent {
  lesson: Lesson;

  constructor( private dialog: MatDialog,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private resourceService: ResourceService) {
    this.lesson = data.lesson;
    this.getLessonResources(this.lesson);

  }


  closeDialog() {
    this.dialog.closeAll();
  }

  addResource(lesson: Lesson) {
    const dialogRef = this.dialog.open(AddResourceComponent, {
      data: {lesson}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLessonResources(lesson);
    });
  }

  private getLessonResources(lesson: Lesson) {
    this.resourceService.getResourcesByLessonId(lesson.id)
      .subscribe((resources) => {
        this.lesson.resources = resources;
      });
  }
}
