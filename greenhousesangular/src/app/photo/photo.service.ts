import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'http://127.0.0.1:8000/api/photos/';
  constructor(private http: HttpClient) { }

  getPhoto(): Observable<Photo[]>{
    return this.http.get<Photo[]>(this.apiUrl);
  }
  getPhotoById(id: number): Observable<Photo> {
    this.apiUrl = `${this.apiUrl}${id}`;
    return this.http.get<Photo>(this.apiUrl);
  }
  addPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(this.apiUrl, photo);
  }
  updatePhoto(id: number, photo: Photo): Observable<Photo>{
    this.apiUrl = `${this.apiUrl}${id}`;
    return this.http.put<Photo>(this.apiUrl, photo);
  }
  deletePhoto(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
