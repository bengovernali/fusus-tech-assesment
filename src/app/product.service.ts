import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: any = [];

  constructor(private http: HttpClient) {}

  async getProducts() {
    this.products = await this.http.get("assets/MOCK_DATA.json").toPromise();
    return this.products;
  }

  async getProductById(id) {
    this.products = await this.http.get("assets/MOCK_DATA.json").toPromise();
    return this.products.find(item => item.id === id);
  }
}
