import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '../models/location';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://127.0.0.1:8000/api/locations/';
  constructor(private http: HttpClient) { }

  getLocation():Observable<Location[]>{
    return this.http.get<Location[]>(this.apiUrl);
  }
  getLocationById(id:number):Observable<Location>{
    const url = `${this.apiUrl}${id}`;
    return this.http.get<Location>(url);
  }
  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(this.apiUrl, location);
  }
  updateLocation(id: number, location: Location): Observable<Location> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put<Location>(url, location);
  }
  deleteLocation(id: number): Observable<void> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete<void>(url);
  }
}
