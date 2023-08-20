import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Album } from '../interface/album'; 
import { Photo } from '../interface/photo'; 

@Injectable()
export class AlbumService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}albums`);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}albums/${albumId}/photos`);
  }

  getUserAlbums(userId: number): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}users/${userId}/albums`);
  }
}
