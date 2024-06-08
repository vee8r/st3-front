import {Component, Inject, OnInit} from '@angular/core';
import {CoursesService} from "../../../service/courses/courses.service";
import {Course} from "../Course";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  Validators
} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions
  ],
  templateUrl: './create-edit-course.component.html',
  styleUrl: './create-edit-course.component.scss'
})
export class CreateEditCourseComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  title: string;
  private course: Course = new Course();

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    private courseService: CoursesService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog
  ) {
    if(data.mode =="edit"){
      this.title = "Edit Course";
    } else {
      this.title = "Create Course";
    }
    this.course = data.course;
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.form = this.formBuilder.group({
      title: new FormControl(this.course.title, Validators.required),
      description: new FormControl(this.course.description, Validators.required)
    });
  }

  onSubmit() {
    if(this.title == "Create Course") {
      if (this.form.valid) {
        const createCourseCommand = this.form.value;
        this.courseService.createCourse(createCourseCommand).subscribe(
          (data) => {
            this.matDialog.closeAll();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else{
      if (this.form.valid) {
        const editCourseCommand = this.form.value;
        this.courseService.updateCourse(this.course.id, editCourseCommand).subscribe(
          (data) => {
            this.matDialog.closeAll();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  closeDialog() {
    this.matDialog.closeAll();
  }
}
