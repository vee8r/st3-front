import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Lesson} from "../../course/Lesson";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatButton} from "@angular/material/button";
import {ResourceService} from "../../../service/lessons/resource.service";

@Component({
  selector: 'app-add-resource',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatInput,
    MatFormField,
    MatSelect,
    MatOption,
    MatButton,
    MatCardActions,
    ReactiveFormsModule
  ],
  templateUrl: './add-resource.component.html',
  styleUrl: './add-resource.component.scss'
})
export class AddResourceComponent {
  form: FormGroup;

  constructor(private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private resourceService: ResourceService) {
    this.form = new FormGroup({
      title: new FormControl(''),
      url: new FormControl(''),
      type: new FormControl(''),
      lessonId: new FormControl(this.data.lesson.id)
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  addResource() {
    const resourceData = this.form.value;
    this.resourceService.createResource(resourceData)
      .subscribe(
        () => {
          this.dialog.closeAll();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
