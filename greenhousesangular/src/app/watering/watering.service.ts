import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Watering } from '../models/watering';
@Injectable({
  providedIn: 'root'
})
export class WateringService {
  private apiUrl = 'http://127.0.0.1:8000/api/waterings/';
  constructor(private http: HttpClient) { }

  getWatering(): Observable<Watering[]>{
    return this.http.get<Watering[]>(this.apiUrl);
  }
  getWateringById(id:number): Observable<Watering>{
    return this.http.get<Watering>(`${this.apiUrl}${id}`);
  }
  addWatering(watering:Watering): Observable<Watering>{
    return this.http.post<Watering>(this.apiUrl, watering);
  }
  updateWatering(id: number, watering: Watering): Observable<Watering>{
    return this.http.put<Watering>(`${this.apiUrl}${id}/`, watering);
  }
  deleteWatering(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
