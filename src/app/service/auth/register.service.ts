import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environments} from "../../environments/environments";
import {SignUpRequest} from "./signUpRequest";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public signup(signup: SignUpRequest): Observable<User> {

    return this.httpClient.post<User>(`${environments.apiAuthEndpoint}/auth/signup`,
      signup);
  }
}
