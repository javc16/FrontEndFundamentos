import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/Models/Categoria';

const baseUrl = "https://localhost:44349/api/Categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(baseUrl);
  }

  getById(id: any): Observable<Categoria> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(categoria: Categoria) {
    return this.http.post(baseUrl, categoria);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
