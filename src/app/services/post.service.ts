import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../interface/post'; 
import { Comment } from '../interface/comment'; 

@Injectable()
export class PostService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}posts`);
  }

  getPostDetails(postId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}posts/${postId}`)
  }

  getCommentsByPostId(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}posts/${postId}/comments`);
  }

  getUserPosts(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}users/${userId}/posts`);
  }
}
