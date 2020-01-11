import { Component, OnInit } from "@angular/core";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  displayedColumns = ["title", "quantity", "cost", "remove"];
  dataSource: any = [];
  sum;

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    this.items = this.cartService.getItems();
    this.calculateSum();
    this.dataSource = this.items;
  }
  onRemove(id) {
    this.items = this.cartService.removeItem(id);
    this.calculateSum();
    this.dataSource = [...this.items];
  }
  onEdit(quantity, id) {
    this.items = this.cartService.editQuantity(id, quantity);
    this.calculateSum();
    this.dataSource = [...this.items];
  }
  calculateSum() {
    // check if no items in cart, then map array of individual item totals
    // reduce mapped array to sum
    // reduce throws error if array is empty
    this.items.length !== 0
      ? (this.sum = this.items
          .map(item => item.price * item.quantity)
          .reduce((prev, next) => prev + next))
      : (this.sum = 0);
  }
}
