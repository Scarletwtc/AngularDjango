import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Specie } from '../models/specie';
@Injectable({
  providedIn: 'root'
})
export class SpecieService {
  private apiUrl = "http://127.0.0.1:8000/api/species/";

  constructor( private  http: HttpClient) { }

  getSpecie(): Observable<Specie[]>{
    return this.http.get<Specie[]>(this.apiUrl);
  }
  getSpecieById(id:number): Observable<Specie>{
    return this.http.get<Specie>(`${this.apiUrl}${id}`);
  }
  addSpecie(specie:Specie): Observable<Specie>{
    return this.http.post<Specie>(this.apiUrl, specie);
  }
  updateSpecie(id: number, specie: Specie): Observable<Specie>{
    return this.http.put<Specie>(`${this.apiUrl}${id}/`, specie);
  }
  deleteSpecie(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
