import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get("/assets/MOCK_DATA.json");
  }
}
