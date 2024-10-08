import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api/users/';
  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  getUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}${id}`);
  }
  addUser(user:User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
  updateUser(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}${id}/`, user);
  }
  deleteUser(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
