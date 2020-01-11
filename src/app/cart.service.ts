import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  constructor(private http: HttpClient) {}

  addToCart(qty, product) {
    product.quantity = qty;
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
    return this.items;
  }
  editQuantity(id, qty) {
    const index = this.items.findIndex(item => item.id === id);
    console.log(this.items[index].quantity);
    this.items[index].quantity = qty;
    console.log(this.items[index].quantity);
    return this.items;
  }
}
