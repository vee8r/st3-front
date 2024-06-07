import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./features/register/register.component";
import {HomeComponent} from "./features/home/home.component";
import {LoginComponent} from "./features/login/login.component";
import {CourseListComponent} from "./features/course/course-list/course-list.component";
import {LessonListComponent} from "./features/lesson/lesson-list/lesson-list.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'lessons',
    component: LessonListComponent
  }

];
