import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LessonsService} from "../../../service/lessons/lessons.service";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Lesson} from "../../course/Lesson";
import {MatPaginator} from "@angular/material/paginator";
import {CreateEditLessonComponent} from "../create-edit-lesson/create-edit-lesson.component";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {LessonDetailsComponent} from "../lesson-details/lesson-details.component";

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [
    MatCard,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatIcon,
    MatIconButton,
    MatHeaderRow,
    MatRow,
    MatCardActions,
    MatButton,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss'
})
export class LessonListComponent implements OnInit {
  lessonsData: Lesson[] = [];
  lessons: MatTableDataSource<Lesson, MatPaginator> = new MatTableDataSource<Lesson>();
  displayedColumns = ['title', 'description', 'actions'];

  constructor(private lessonService: LessonsService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadLessons();
  }

  private loadLessons() {
    this.lessonService.getLessons().subscribe(
      (data) => {
        this.lessonsData = data;
        this.lessons = new MatTableDataSource<Lesson>(this.lessonsData);
      },
      (error) => {
        console.error('Error loading lessons', error);
      }
    );
  }

  deleteLesson(lesson: Lesson) {
    this.lessonService.deleteLesson(lesson.id).subscribe(
      () => {
        this.loadLessons();
      },
      (error) => {
        console.error('Error deleting lesson', error);
      }
    );
  }

  createLesson() {
    this.dialog.open(CreateEditLessonComponent, {
      width: '400px',
      data: {
        title: 'Utwórz lekcję',
        lesson: new Lesson()
      }
    }).afterClosed().subscribe(
      () => {
        this.loadLessons();
      }
    );
  }

  editLesson(element: Lesson) {
    this.dialog.open(CreateEditLessonComponent, {
      width: '400px',
      data: {
        title: 'Edytuj lekcję',
        lesson: element
      }
    }).afterClosed().subscribe(
      () => {
        this.loadLessons();
      }
    );

  }

  showLesson(element: Lesson) {
    this.dialog.open(LessonDetailsComponent, {
      width: '400px',
      data: {
        title: 'Podgląd lekcji',
        lesson: element
      }
    });

  }
}
