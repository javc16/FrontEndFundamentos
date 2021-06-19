import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductOwner } from '../../Models/ProductOwner';

const baseUrl = "https://localhost:44349/api/ProductOwner";

@Injectable({
  providedIn: 'root'
})
export class ProductOwnerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductOwner[]> {
    return this.http.get<ProductOwner[]>(baseUrl);
  }

  getById(id: any): Observable<ProductOwner> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(productOwner: ProductOwner) {
    return this.http.post(baseUrl, productOwner);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  updateItem(data: any): Observable<any> {
    return this.http.put(baseUrl, data);
  }
}
