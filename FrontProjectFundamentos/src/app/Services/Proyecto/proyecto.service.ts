import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/Models/Proyecto';

const baseUrl = "https://localhost:44349/api/Proyecto";

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(baseUrl);
  }

  getById(id: any): Observable<Proyecto> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(proyecto: Proyecto) {
    return this.http.post(baseUrl, proyecto);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
