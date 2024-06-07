import {Component} from '@angular/core';
import {CoursesService} from "../../../service/courses/courses.service";
import {Course} from "../Course";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
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
    MatLabel
  ],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.scss'
})
export class CreateCourseComponent {


  createCourseCommand: Course | undefined;
  form: UntypedFormGroup;

  constructor(private courseService: CoursesService,
              private formBuilder: FormBuilder,
              private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: [''],
      description: ['']
    });
    }

  onSubmit() {
  debugger;
  this.courseService.createCourse(this.createCourseCommand).subscribe(
    (data) => {
      this.matDialog.closeAll();
    },
    (error) => {
      console.log(error);
    }
  )
}


}
