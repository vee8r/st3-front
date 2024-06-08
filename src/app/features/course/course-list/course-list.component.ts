import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../../../service/courses/courses.service";
import {MatButton} from "@angular/material/button";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatCard, MatCardHeader} from "@angular/material/card";
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {Course} from "../Course";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditCourseComponent} from "../create-course/create-edit-course.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCard,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    MatCardHeader
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})

export class CourseListComponent implements OnInit {
  courses: CdkTableDataSourceInput<any> = new MatTableDataSource<Course>();
  displayedColumns = ['title', 'description', 'actions'];
  coursesData: Course[] = [];

  constructor(private courseService: CoursesService,
              private dialog: MatDialog ) {

  }

  ngOnInit() {
    this.loadCourses();
  }

  private loadCourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.coursesData = data;
        this.courses = new MatTableDataSource<Course>(this.coursesData);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onCreateNewCourse() {

      const dialogRef = this.dialog.open(CreateEditCourseComponent, {
         data: {
           mode: 'create',
           course: new Course()
         }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loadCourses();
      });

  }

  onEditCourse(course: Course) {
    const dialogRef = this.dialog.open(CreateEditCourseComponent, {
      data: {
        mode: 'edit',
        course: course
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.loadCourses();
    });
  }

  onDeleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id).subscribe(
      (data) => {
        this.loadCourses();
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
