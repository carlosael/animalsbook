import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from './comments';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  findComment(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(`${API}/photos/${id}/comments`);
  }

  addComment(id: number, commentText: string): Observable<Comment> {
    return this.httpClient.post<Comment>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
