import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products;
  searchItems;
  displayProducts;

  constructor(private http: HttpClient) {}

  async getProducts() {
    this.products = await this.http.get("assets/MOCK_DATA.json").toPromise();
    this.searchItems = this.products;
    return this.products;
  }

  async getProductById(id) {
    this.products = await this.http.get("assets/MOCK_DATA.json").toPromise();
    return this.products.find(item => item.id === id);
  }

  async getSearch(searchTerm, index, size) {
    if (searchTerm) {
      this.searchItems = await this.products.filter(item =>
        item.title.includes(searchTerm)
      );
      return this.paginate(index, size);
    } else {
      this.searchItems = this.products;
      return this.paginate(index, size);
    }
  }

  async paginate(index, size) {
    // use a slice to select only the products from this.products that we want to display
    const start = index * size;
    this.displayProducts = await this.searchItems.slice(start, start + size);
    return this.displayProducts;
  }
}
