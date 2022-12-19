import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { tap } from 'rxjs/operators';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = API;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(user: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        this.url,
        {
          userName: user,
          password: password,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.userService.saveToken(authToken);
        })
      );
  }
}
