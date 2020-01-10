import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products;
  searchItems;

  constructor(private http: HttpClient) {}

  async getProducts() {
    this.products = await this.http.get("assets/MOCK_DATA.json").toPromise();
    return this.products;
  }

  getProductById(id) {
    return this.products.find(item => item.id === id);
  }

  async getSearch(searchTerm) {
    this.searchItems = await this.products.filter(item =>
      item.title.includes(searchTerm)
    );
    return this.searchItems;
  }
}
