import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/Models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "https://localhost:44349/api/Proyecto";

  }

  getData(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url);
  }

  create(proyecto: Proyecto) {
    return this.http.post(this.url, proyecto);
  }
}
