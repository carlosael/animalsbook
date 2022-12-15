import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  constructor(private httpClient: HttpClient) { }

  signUp(newUser: NewUser) {
    return this.httpClient.post('http://localhost:3000/user/signup', newUser);
  }

  verifyExistingUser(userName: string) {
    return this.httpClient.get(`http://localhost:3000/user/exists/${userName}`)
  }
}
