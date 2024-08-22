import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitTime } from '../models/visitTime';
@Injectable({
  providedIn: 'root'
})
export class VisitTimeService {
  private apiUrl = 'http://127.0.0.1:8000/api/visit_times/';
  constructor(private http: HttpClient) { }

  getVisitTime(): Observable<VisitTime[]>{
    return this.http.get<VisitTime[]>(this.apiUrl);
  }
  getVisitTimeById(id:number): Observable<VisitTime>{
    return this.http.get<VisitTime>(`${this.apiUrl}${id}`);
  }
  addVisitTime(visitTime:VisitTime): Observable<VisitTime>{
    return this.http.post<VisitTime>(this.apiUrl, visitTime);
  }
  updateVisitTime(id: number, visitTime: VisitTime): Observable<VisitTime>{
    return this.http.put<VisitTime>(`${this.apiUrl}${id}/`, visitTime);
  }
  deleteVisitTime(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
