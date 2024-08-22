import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkSchedule } from '../models/workSchedule';
@Injectable({
  providedIn: 'root'
})
export class WorkScheduleService {
  private apiUrl = 'http://127.0.0.1:8000/api/work_Schedules/';
  constructor(private http: HttpClient) { }

  getWorkSchedule(): Observable<WorkSchedule[]>{
    return this.http.get<WorkSchedule[]>(this.apiUrl);
  }
  getWorkScheduleById(id:number): Observable<WorkSchedule>{
    return this.http.get<WorkSchedule>(`${this.apiUrl}${id}`);
  }
  addWorkSchedule(workSchedule:WorkSchedule): Observable<WorkSchedule>{
    return this.http.post<WorkSchedule>(this.apiUrl, workSchedule);
  }
  updateWorkSchedule(id: number, workSchedule: WorkSchedule): Observable<WorkSchedule>{
    return this.http.put<WorkSchedule>(`${this.apiUrl}${id}/`, workSchedule);
  }
  deleteWorkSchedule(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
