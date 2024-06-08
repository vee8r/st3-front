import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../../features/course/Course";
import {environments} from "../../../environments/environments";
import {Observable} from "rxjs";
import {Lesson} from "../../features/course/Lesson";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private httpClient: HttpClient) {
  }

  getLessons(): Observable<Array<Lesson>> {
    return this.httpClient.get<Lesson[]>(`${environments.apiEndpoint}/lessons`);
  }

  getLessonById(id: number) {
    return this.httpClient.get(`${environments.apiEndpoint}/lessons/${id}`);
  }

  createLesson(lesson: Lesson) {
    return this.httpClient.post(`${environments.apiEndpoint}/lessons`, lesson);
  }

  deleteLesson(id: number) {
    return this.httpClient.delete(`${environments.apiEndpoint}/lessons/${id}`);
  }

  updateLesson(id: number, editLessonCommand: Lesson) {
    return this.httpClient.put(`${environments.apiEndpoint}/lessons/${id}`, editLessonCommand);
  }

}
