import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pesticide } from '../models/pesticide';

@Injectable({
  providedIn: 'root'
})
export class PesticideService {
  private apiUrl = 'http://127.0.0.1:8000/api/pesticides/';

  constructor(private http: HttpClient) { }

  getPesticide(): Observable<Pesticide[]>{
    return this.http.get<Pesticide[]>(this.apiUrl);
  }

  getPesticideById(id: number): Observable<Pesticide> {
    this.apiUrl = `${this.apiUrl}${id}`;
    return this.http.get<Pesticide>(this.apiUrl);
  }

  addPesticide(pesticide: Pesticide): Observable<Pesticide> {
    return this.http.post<Pesticide>(this.apiUrl, pesticide);
  }

  deletePesticide(id:number): Observable<void> {
    this.apiUrl = `${this.apiUrl}${id}`;
    return this.http.delete<void>(this.apiUrl);
  }

  updatePesticide(id: number, pesticide: Pesticide): Observable<Pesticide> {
    this.apiUrl = `${this.apiUrl}${id}`;
    return this.http.put<Pesticide>(this.apiUrl, pesticide);
  }
}
