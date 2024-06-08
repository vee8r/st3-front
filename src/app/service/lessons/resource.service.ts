import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Lesson} from "../../features/course/Lesson";
import {environments} from "../../../environments/environments";
import {Resource} from "../../features/course/Resource";

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private httpClient: HttpClient) {
  }

  createResource(resource: Resource) {
    return this.httpClient.post(`${environments.apiEndpoint}/resources`, resource);
  }

  getResourcesByLessonId(id: number): Observable<Array<Resource>> {
    return this.httpClient.get<Resource[]>(`${environments.apiEndpoint}/resources/lessons/${id}`);
  }
}
