import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantHarvest } from '../models/plantHarvest';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlantHarvestService {
  private apiUrl = 'http://127.0.0.1:8000/api/plant_harvests/';
  constructor( private http: HttpClient) { }

  getPlantHarvest(): Observable<PlantHarvest[]>{
    return this.http.get<PlantHarvest[]>(this.apiUrl);
  }

  getPlantHarvestById(id: number): Observable<PlantHarvest>{
    return this.http.get<PlantHarvest>(`${this.apiUrl}${id}/`);
  }
  deletePlantHarvest(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
  updatePlantHarvest(id: number, plantHarvest: PlantHarvest): Observable<PlantHarvest>{
    return this.http.put<PlantHarvest>(`${this.apiUrl}${id}/`, plantHarvest);
  }
  addPlantHarvest(plantHarvest: PlantHarvest): Observable<PlantHarvest>{
    return this.http.post<PlantHarvest>(this.apiUrl, plantHarvest);
  }
}
