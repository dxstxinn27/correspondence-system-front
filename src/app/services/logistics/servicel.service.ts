import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicelI } from '../../models/logistic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicelService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/logistics/service/`;

  constructor(
    private http:HttpClient
  ) { }

  getAllServicel():Observable<ServicelI[]>{
    return this.http
      .get<ServicelI[]>(this.base_path)
  }

  getOneServicel(id: number):Observable<ServicelI>{
    return this.http
      .get<ServicelI>(`${this.base_path}${id}`)
  }

  createServicel(data: any):Observable<ServicelI>{
    return this.http.post<ServicelI>(this.base_path, data)
  }

  updateServicel(id: number, data: any): Observable<ServicelI> {
    return this.http.put<ServicelI>(`${this.base_path}${id}/`, data);
  }

  deleteServicel(id: number): Observable<ServicelI> {
    return this.http.delete<ServicelI>(`${this.base_path}${id}`);
  }
}
