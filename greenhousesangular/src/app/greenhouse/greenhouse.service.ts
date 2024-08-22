import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Greenhouse } from '../models/greenhouse';

@Injectable({
  providedIn: 'root'
})
export class GreenhouseService {
  private apiUrl = 'http://127.0.0.1:8000/api/greenhouses/';
  constructor(private http: HttpClient) { }

  getGreenhouse(): Observable<Greenhouse[]>{ 
    return this.http.get<Greenhouse[]>(this.apiUrl);
  }

  getGreenhouseById(id:number): Observable<Greenhouse>{
    const url= `${this.apiUrl}${id}`;
    return this.http.get<Greenhouse>(url);
  }

  addGreenhouse(greenhouse: Greenhouse): Observable<Greenhouse> {
    return this.http.post<Greenhouse>(this.apiUrl, greenhouse);
  }

  deleteGreenhouse(id: number): Observable<void> {
    const url= `${this.apiUrl}${id}/`;
    return this.http.delete<void>(url);
  }

  updateGreenhouse(id: number, greenhouse: Greenhouse): Observable<Greenhouse>{
    const url= `${this.apiUrl}${id}/`;
    return this.http.put<Greenhouse>(url, greenhouse);
  }

}
