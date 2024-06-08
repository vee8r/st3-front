import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {environments} from "../../../environments/environments";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {Course} from "../../features/course/Course";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  getCourses():Observable<Array<Course>> {
    return this.httpClient.get<Course[]>(`${environments.apiEndpoint}/courses`);
  }

  getCourseById(id: number) {
    return this.httpClient.get(`${environments.apiEndpoint}/courses/${id}`);
  }

  createCourse(course: any) {
    return this.httpClient.post(`${environments.apiEndpoint}/courses`, course);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete(`${environments.apiEndpoint}/courses/${id}`);
  }

  updateCourse(id: number, editCourseCommand: Course) {
    return this.httpClient.put(`${environments.apiEndpoint}/courses/${id}`, editCourseCommand);
  }
}

