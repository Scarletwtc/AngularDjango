import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherDate } from '../models/weatherDate';
@Injectable({
  providedIn: 'root'
})
export class WeatherDateService {
  private apiUrl = 'http://127.0.0.1:8000/api/weather_dates/';
  constructor(private http: HttpClient) { }

  getWeatherDate(): Observable<WeatherDate[]>{
    return this.http.get<WeatherDate[]>(this.apiUrl);
  }
  getWeatherDateById(id:number): Observable<WeatherDate>{
    return this.http.get<WeatherDate>(`${this.apiUrl}${id}`);
  }
  addWeatherDate(weatherDate:WeatherDate): Observable<WeatherDate>{
    return this.http.post<WeatherDate>(this.apiUrl, weatherDate);
  }
  updateWeatherDate(id: number, weatherDate: WeatherDate): Observable<WeatherDate>{
    return this.http.put<WeatherDate>(`${this.apiUrl}${id}/`, weatherDate);
  }
  deleteWeatherDate(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
