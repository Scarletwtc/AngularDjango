import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Terrain } from '../models/terrain';
@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private apiUrl = 'http://127.0.0.1:8000/api/terrains/';
  constructor(private http: HttpClient) { }

  getTerrain(): Observable<Terrain[]>{
    return this.http.get<Terrain[]>(this.apiUrl);
  }
  getTerrainById(id:number): Observable<Terrain>{
    return this.http.get<Terrain>(`${this.apiUrl}${id}`);
  }
  addTerrain(terrain:Terrain): Observable<Terrain>{
    return this.http.post<Terrain>(this.apiUrl, terrain);
  }
  updateTerrain(id: number, terrain: Terrain): Observable<Terrain>{
    return this.http.put<Terrain>(`${this.apiUrl}${id}/`, terrain);
  }
  deleteTerrain(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
