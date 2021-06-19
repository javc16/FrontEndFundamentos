import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from 'src/app/Models/Departamento';

const baseUrl = "https://localhost:44349/api/Departamento";

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(baseUrl);
  }

  getById(id: any): Observable<Departamento> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(departamento: Departamento) {
    return this.http.post(baseUrl, departamento);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
