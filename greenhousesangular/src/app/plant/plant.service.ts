import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = 'http://127.0.0.1:8000/api/plants/';
  constructor( private  http: HttpClient) { }

  getPlant(): Observable<Plant[]>{
    return this.http.get<Plant[]>(this.apiUrl);
  }
  getPlantById(id:number): Observable<Plant>{
    return this.http.get<Plant>(`${this.apiUrl}${id}`);
  }
  addPlant(plant:Plant): Observable<Plant>{
    return this.http.post<Plant>(this.apiUrl, plant);
  }
  updatePlant(id: number, plant: Plant): Observable<Plant>{
    return this.http.put<Plant>(`${this.apiUrl}${id}/`, plant);
  }
  deletePlant(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }

}
