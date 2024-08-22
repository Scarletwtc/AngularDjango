import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Worker } from '../models/worker';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  private apiUrl = 'http://127.0.0.1:8000/api/workers/';
  constructor(private http: HttpClient) { }

  getWorker(): Observable<Worker[]>{
    return this.http.get<Worker[]>(this.apiUrl);
  }
  getWorkerById(id:number): Observable<Worker>{
    return this.http.get<Worker>(`${this.apiUrl}${id}`);
  }
  addWorker(worker:Worker): Observable<Worker>{
    return this.http.post<Worker>(this.apiUrl, worker);
  }
  updateWorker(id: number, worker: Worker): Observable<Worker>{
    return this.http.put<Worker>(`${this.apiUrl}${id}/`, worker);
  }
  deleteWorker(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
