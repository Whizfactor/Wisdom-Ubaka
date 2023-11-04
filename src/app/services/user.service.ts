import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../interface/user'; // Import the User interface

@Injectable()
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> { // Use User[] type
    return this.http.get<User[]>(`${this.apiUrl}users`); // Return User[] type
  }

  getUserById(userId: string): Observable<User> { // Use User type
    return this.http.get<User>(`${this.apiUrl}users/${userId}`); // Return User type
  }
}
