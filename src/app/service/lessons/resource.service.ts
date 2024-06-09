import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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

  createResource(resource: Resource): Observable<Resource> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    const params = new HttpParams().set('lessonId', resource.lessonId.toString());

    return this.httpClient.post<Resource>(`${environments.apiEndpoint}/resources`, resource, { headers, params });
  }

  getResourcesByLessonId(id: number): Observable<Array<Resource>> {
    return this.httpClient.get<Resource[]>(`${environments.apiEndpoint}/resources/lessons/${id}`);
  }
}
