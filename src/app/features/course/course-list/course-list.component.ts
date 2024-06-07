import {Component} from '@angular/core';
import {CoursesService} from "../../../service/courses/courses.service";
import {MatButton} from "@angular/material/button";
import {MatCell, MatColumnDef, MatHeaderCell, MatTable, MatTableDataSource} from "@angular/material/table";
import {MatCard} from "@angular/material/card";
import {CdkTableDataSourceInput} from "@angular/cdk/table";
import {Course} from "../Course";
import {MatDialog} from "@angular/material/dialog";
import {CreateCourseComponent} from "../create-course/create-course.component";

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    MatButton,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCard
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})

export class CourseListComponent {
  courses: CdkTableDataSourceInput<any> = new MatTableDataSource<Course>();
  displayedColumns: any;
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
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  onCreateNewCourse() {

      const dialogRef = this.dialog.open(CreateCourseComponent, {
        // data: {name: this.name, animal: this.animal},
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.loadCourses();
      });

  }

  onEditCourse(course: Course) {

  }

  onDeleteCourse(course: Course) {

  }
}
