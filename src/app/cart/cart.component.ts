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

  constructor(private cartService: CartService) {}

  async ngOnInit() {
    this.items = this.cartService.getItems();
    this.dataSource = this.items;
  }
  onRemove(id) {
    this.items = this.cartService.removeItem(id);
    this.dataSource = [...this.items];
  }
}
