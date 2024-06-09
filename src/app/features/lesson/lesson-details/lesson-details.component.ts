import {Component, Inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {Lesson} from "../../course/Lesson";
import {MatDivider} from "@angular/material/divider";
import {MatList, MatListItem} from "@angular/material/list";
import {MatLine} from "@angular/material/core";
import {NgForOf, NgIf} from "@angular/common";
import {AddResourceComponent} from "../add-resource/add-resource.component";
import {ResourceService} from "../../../service/lessons/resource.service";
import {Resource} from "../../course/Resource";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";

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
    NgForOf,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    NgIf,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.scss'
})
export class LessonDetailsComponent {
  lesson: Lesson;
  resources: Resource[] = [];
  displayedColumns: string[] = ['id', 'title', 'type', 'url'];

  constructor(private dialog: MatDialog,
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
      data: { lesson }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLessonResources(lesson);
    });
  }

  private getLessonResources(lesson: Lesson) {
    this.resourceService.getResourcesByLessonId(lesson.id)
      .subscribe((resources: Resource[]) => {
        this.resources = resources;
      });
  }
}
