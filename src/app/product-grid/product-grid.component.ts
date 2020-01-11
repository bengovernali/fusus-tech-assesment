import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Directive
} from "@angular/core";

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
  pageSize = 50;
  pageSizeOptions: number[] = [50, 100];
  pageEvent: PageEvent;
  pageIndex: number;
  length: number;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    console.log(this.products.__zone_symbol__value.length);
  }

  onEnter(searchValue: string) {
    // empty products to clear the page
    this.products = [];
    // search for products that include search term
    this.products = this.productService.getSearch(searchValue);
  }

  getPagination(event) {
    console.log(event);
    this.length = this.products.__zone_symbol__value.length;
    console.log(this.length);
    this.pageSize = event.pageSize;
  }
}
