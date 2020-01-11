import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ProductService } from "../product.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  id;
  data: any = {};
  url;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    //get product id from url, then get product details for that id. update image url
    this.id = await this.route.snapshot.paramMap.get("productId");
    this.data = await this.productService.getProductById(this.id);
    this.updateUrl();
  }

  addToCart(qty, product) {
    //check if the qty given is valid, if not let the customer know
    if (qty < 1 || isNaN(qty)) {
      window.alert("That is not a valid quantity");
      return;
    } else {
      window.alert("Your product(s) have been added to the cart");
      this.cartService.addToCart(qty, product);
    }
  }

  updateUrl() {
    this.url = this.data.image_url.replace("x.png", "200x300");
  }
}
