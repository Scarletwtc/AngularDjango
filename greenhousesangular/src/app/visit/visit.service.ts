import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from '../models/visit';
@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private apiUrl = 'http://127.0.0.1:8000/api/visits/';
  constructor(private http: HttpClient) { }

  getVisit(): Observable<Visit[]>{
    return this.http.get<Visit[]>(this.apiUrl);
  }
  getVisitById(id:number): Observable<Visit>{
    return this.http.get<Visit>(`${this.apiUrl}${id}`);
  }
  addVisit(visit:Visit): Observable<Visit>{
    return this.http.post<Visit>(this.apiUrl, visit);
  }
  updateVisit(id: number, visit: Visit): Observable<Visit>{
    return this.http.put<Visit>(`${this.apiUrl}${id}/`, visit);
  }
  deleteVisit(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
