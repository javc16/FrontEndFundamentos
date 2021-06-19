import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/Models/Ticket';

const baseUrl = "https://localhost:44349/api/Ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(baseUrl);
  }

  getById(id: any): Observable<Ticket> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(ticket: Ticket) {
    return this.http.post(baseUrl, ticket);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }

}
