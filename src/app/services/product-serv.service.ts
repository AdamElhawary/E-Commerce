import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get(this.url);
  }
  getProduct(id: any) {
    return this.httpClient.get(`${this.url}/${id}`);
  }
}
