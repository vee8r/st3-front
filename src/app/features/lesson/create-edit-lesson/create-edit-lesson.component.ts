import {Component, Inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldControl, MatLabel} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {LessonsService} from "../../../service/lessons/lessons.service";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Lesson} from "../../course/Lesson";

@Component({
  selector: 'app-create-edit-lesson',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatCardActions,
    MatCardTitle,
    MatInput,
    MatLabel,
    MatButton
  ],
  templateUrl: './create-edit-lesson.component.html',
  styleUrl: './create-edit-lesson.component.scss'
})
export class CreateEditLessonComponent {
  private lesson: Lesson;
  lessonForm: FormGroup = new FormGroup({});
  title: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private lessonService: LessonsService) {
    this.lesson = data.lesson;
    this.title = data.title;
    this.lessonForm = this.formBuilder.group({
      title: new FormControl(this.lesson.title),
      content: new FormControl(this.lesson.content)
    });
  }


  closeDialog() {
    this.dialog.closeAll();
  }

  onSubmit() {
    if (this.lesson.id) {
      this.lessonService.updateLesson(this.lesson.id, this.lessonForm.value).subscribe(
        (data) => {
          this.dialog.closeAll();
        }
      );
    } else {
      this.lessonService.createLesson(this.lessonForm.value).subscribe(
        (data) => {
          this.dialog.closeAll();
        }
      );
    }
  }
}
