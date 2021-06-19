import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Desarrollador } from 'src/app/Models/Desarrollador';

const baseUrl = "https://localhost:44349/api/Desarrollador";

@Injectable({
  providedIn: 'root'
})
export class DesarrolladorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Desarrollador[]> {
    return this.http.get<Desarrollador[]>(baseUrl);
  }

  getById(id: any): Observable<Desarrollador> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(desarrollador: Desarrollador) {
    return this.http.post(baseUrl, desarrollador);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
