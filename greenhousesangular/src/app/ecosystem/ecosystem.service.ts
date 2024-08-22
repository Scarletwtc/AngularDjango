import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ecosystem } from '../models/ecosystem';
@Injectable({
  providedIn: 'root'
})
export class EcosystemService {
  private apiUrl = 'http://127.0.0.1:8000/api/ecosystems/';
  constructor(private http: HttpClient) { }

  getEcosystem(): Observable<Ecosystem[]>{
    return this.http.get<Ecosystem[]>(this.apiUrl);
  }

  addEcosystem(ecosystem: Ecosystem): Observable<Ecosystem> {
    return this.http.post<Ecosystem>(this.apiUrl, ecosystem);
  }

  deleteEcosystem(id:number): Observable<void>{
    const url = `${this.apiUrl}${id}/`;
    return this.http.delete<void>(url);
    //So, the url in the http.delete<void>(url) line is the endpoint where the DELETE request is sent, 
    //specifying which resource (ecosystem) should be deleted based on its ID.
  }

  getEcosystemById(id: number): Observable<Ecosystem> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.get<Ecosystem>(url);
  }
  
  updateEcosystem(id: number, ecosystem: Ecosystem): Observable<Ecosystem> {
    const url = `${this.apiUrl}${id}/`;
    return this.http.put<Ecosystem>(url, ecosystem);
  }
  
}

//layla, observable is a stream of data that can be subscribed to. It is the type of data we are returning.
//  we subscribe to the observable.Observables are often used to handle asynchronous operations, such as HTTP requests, where you don’t know when or if data will arrive.
 