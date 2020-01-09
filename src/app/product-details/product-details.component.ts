import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  id;
  data: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("productId");
    this.data = await this.productService.getProductById(this.id);
    console.log(this.data);
  }
}
