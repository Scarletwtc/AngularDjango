import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SoilType } from '../models/soilType';

@Injectable({
  providedIn: 'root'
})
export class SoilTypeService {
  private apiUrl = "http://127.0.0.1:8000/api/soil_types/";

  constructor( private  http: HttpClient) { }

  getSoilType(): Observable<SoilType[]>{
    return this.http.get<SoilType[]>(this.apiUrl);
  }
  getSoilTypeById(id:number): Observable<SoilType>{
    return this.http.get<SoilType>(`${this.apiUrl}${id}`);
  }
  addSoilType(soilType:SoilType): Observable<SoilType>{
    return this.http.post<SoilType>(this.apiUrl, soilType);
  }
  updateSoilType(id: number, soilType: SoilType): Observable<SoilType>{
    return this.http.put<SoilType>(`${this.apiUrl}${id}/`, soilType);
  }
  deleteSoilType(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
