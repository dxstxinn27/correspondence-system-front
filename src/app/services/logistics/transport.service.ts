import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportI } from '../../models/logistic';

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/logistics/transport/`

  constructor(
    private http:HttpClient
  ) { }

  getAllTransport():Observable<TransportI[]>{
    return this.http
      .get<TransportI[]>(this.base_path)
  }

  getOneTransport(id: number):Observable<TransportI>{
    return this.http
      .get<TransportI>(`${this.base_path}${id}`)
  }



  createTransport(data: any):Observable<TransportI>{
    return this.http.post<TransportI>(this.base_path, data)
  }

  updateTransport(id: number, data: any): Observable<TransportI> {
    return this.http.put<TransportI>(`${this.base_path}${id}/`, data);
  }

  deleteTransport(id: number): Observable<TransportI> {
    return this.http.delete<TransportI>(`${this.base_path}${id}`);
  }
}
