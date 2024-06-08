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
  form: FormGroup = new FormGroup({});

  constructor(private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
              private resourceService: ResourceService) {
    this.initForm();
  }

  closeDialog() {
    this.dialog.closeAll()
  }


  private initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl(this.data.lesson.id),
      title: new FormControl(''),
      url: new FormControl(''),
      type: new FormControl('')
    });
  }

  addResource() {
    this.resourceService.createResource(this.form.value)
      .subscribe(
        () => {
          this.dialog.closeAll();
        },
        (error) => {
          console.log(error)
        }
      )
  }

}
