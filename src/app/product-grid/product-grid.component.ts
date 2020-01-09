import { Component, OnInit } from "@angular/core";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
