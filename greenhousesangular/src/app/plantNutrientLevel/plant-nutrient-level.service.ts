import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlantNutrientLevel } from '../models/plantNutrientLevel';

@Injectable({
  providedIn: 'root'
})
export class PlantNutrientLevelService {
  private apiUrl = "http://127.0.0.1:8000/api/plant_nutrient_levels/";

  constructor( private  http: HttpClient) { }

  getPlantNutrientLevel(): Observable<PlantNutrientLevel[]>{
    return this.http.get<PlantNutrientLevel[]>(this.apiUrl);
  }
  getPlantNutrientLevelById(id:number): Observable<PlantNutrientLevel>{
    return this.http.get<PlantNutrientLevel>(`${this.apiUrl}${id}`);
  }
  addPlantNutrientLevel(plantNutrientLevel:PlantNutrientLevel): Observable<PlantNutrientLevel>{
    return this.http.post<PlantNutrientLevel>(this.apiUrl, plantNutrientLevel);
  }
  updatePlantNutrientLevel(id: number, plantNutrientLevel: PlantNutrientLevel): Observable<PlantNutrientLevel>{
    return this.http.put<PlantNutrientLevel>(`${this.apiUrl}${id}/`, plantNutrientLevel);
  }
  deletePlantNutrientLevel(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
