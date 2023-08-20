import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from '../interface/todo';

@Injectable()
export class TodoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}todos`);
  }

  getUserTodos(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}users/${userId}/todos`);
  }
}
