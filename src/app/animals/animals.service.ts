import { environment } from 'src/environments/environment';
import { TokenService } from './../authentication/token.service';
import { Animal, Animals } from './animal';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  userList(userName: string): Observable<Animals> {
    return this.httpClient.get<Animals>(`${API}/${userName}/photos`);
  }

  searchById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${API}/photos/${id}`);
  }
}
