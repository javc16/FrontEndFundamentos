import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EstadoTicket } from 'src/app/Models/EstadoTicket';

const baseUrl = "https://localhost:44349/api/EstadoTicket";

@Injectable({
  providedIn: 'root'
})
export class EstadoTicketService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<EstadoTicket[]> {
    return this.http.get<EstadoTicket[]>(baseUrl);
  }

  getById(id: any): Observable<EstadoTicket> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(estadoTicket: EstadoTicket) {
    return this.http.post(baseUrl, estadoTicket);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
