import { Component, OnInit } from "@angular/core";

import { ProductService } from "../product.service";
import { CartService } from "../cart.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products;
  searchItems;
  displayProducts;

  // MatPaginatorInputs
  pageSize = 50;
  pageSizeOptions: number[] = [50, 100, 200];
  pageEvent: PageEvent;
  pageIndex = 0;
  length: number;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  async ngOnInit() {
    // call get initial products
    await this.getInitProducts();

    // set paginator length to length of products
    this.length = this.products.__zone_symbol__value.length;

    // generate products to be displayed
    this.identifyProducts();
  }

  getInitProducts() {
    // call getProducts from products service to pull data from json file
    this.products = this.productService.getProducts();
    return this.products;
  }

  onSearch(searchValue: string) {
    // empty products to clear the page
    this.displayProducts = [];
    // search for products that include search term
    this.displayProducts = this.productService.getSearch(
      searchValue,
      this.pageIndex,
      this.pageSize
    );
    this.identifyProducts();
    this.updateLength();
  }

  getPagination(event) {
    // set new paginator values and identify new products to display
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.identifyProducts();
  }

  identifyProducts() {
    // call paginate from product service
    this.displayProducts = this.productService.paginate(
      this.pageIndex,
      this.pageSize
    );
  }

  updateLength() {
    this.length = this.productService.getLength();
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
}
