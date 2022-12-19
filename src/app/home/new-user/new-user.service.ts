import { environment } from './../../../environments/environment';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private httpClient: HttpClient) {}

  signUp(newUser: NewUser) {
    return this.httpClient.post(`${API}/user/signup`, newUser);
  }

  verifyExistingUser(userName: string) {
    return this.httpClient.get(`${API}/user/exists/${userName}`);
  }
}
