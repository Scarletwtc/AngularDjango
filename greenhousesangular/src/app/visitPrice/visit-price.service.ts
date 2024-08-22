import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitPrice } from '../models/visitPrice';
@Injectable({
  providedIn: 'root'
})
export class VisitPriceService {
  private apiUrl = 'http://127.0.0.1:8000/api/visit_prices/';
  constructor(private http: HttpClient) { }

  getVisitPrice(): Observable<VisitPrice[]>{
    return this.http.get<VisitPrice[]>(this.apiUrl);
  }
  getVisitPriceById(id:number): Observable<VisitPrice>{
    return this.http.get<VisitPrice>(`${this.apiUrl}${id}`);
  }
  addVisitPrice(visitPrice:VisitPrice): Observable<VisitPrice>{
    return this.http.post<VisitPrice>(this.apiUrl, visitPrice);
  }
  updateVisitPrice(id: number, visitPrice: VisitPrice): Observable<VisitPrice>{
    return this.http.put<VisitPrice>(`${this.apiUrl}${id}/`, visitPrice);
  }
  deleteVisitPrice(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
