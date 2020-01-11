import { Component, OnInit } from "@angular/core";

import { ProductService } from "../product.service";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products;
  searchItems;

  // MatPaginatorInputs
  pageSize = 20;
  pageSizeOptions: number[] = [20, 50, 100];
  pageEvent: PageEvent;
  pageIndex: number;
  length: number;

  constructor(private productService: ProductService) {}

  async ngOnInit() {
    // call get initial products
    await this.getInitProducts();

    // set paginator length to length of products
    this.length = this.products.__zone_symbol__value.length;
  }

  getInitProducts() {
    // call getProducts from products service to pull data from json file
    this.products = this.productService.getProducts();
    return this.products;
  }

  onEnter(searchValue: string) {
    // empty products to clear the page
    this.products = [];
    // search for products that include search term
    this.products = this.productService.getSearch(searchValue);
  }

  getPagination(event) {
    console.log(event);
    this.pageSize = event.pageSize;
  }
}
