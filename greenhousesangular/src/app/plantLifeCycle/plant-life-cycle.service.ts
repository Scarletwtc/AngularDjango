import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantLifeCycle } from '../models/plantLifeCycle';
@Injectable({
  providedIn: 'root'
})
export class PlantLifeCycleService {
  private apiUrl = 'http://127.0.0.1:8000/api/plant_life_cycles/';
  constructor(private http: HttpClient) { }

  getPlantLifeCycle(): Observable<PlantLifeCycle[]>{
    return this.http.get<PlantLifeCycle[]>(this.apiUrl);
  }
  getPlantLifeCycleById(id:number): Observable<PlantLifeCycle>{
    return this.http.get<PlantLifeCycle>(`${this.apiUrl}${id}`);
  }
  addPlantLifeCycle(plantLifeCycle:PlantLifeCycle): Observable<PlantLifeCycle>{
    return this.http.post<PlantLifeCycle>(this.apiUrl, plantLifeCycle);
  }
  updatePlantLifeCycle(id: number, plantLifeCycle: PlantLifeCycle): Observable<PlantLifeCycle>{
    return this.http.put<PlantLifeCycle>(`${this.apiUrl}${id}/`, plantLifeCycle);
  }
  deletePlantLifeCycle(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
