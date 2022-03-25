import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupRequest } from 'src/app/model/signup-request';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private getUrl: string = 'http://localhost:8080/api/auth/';

  constructor(private _httpClient: HttpClient) { }

  signup(signupRequest: SignupRequest){
    return this._httpClient.post<SignupRequest>(this.getUrl + "signup", signupRequest);
  }
}