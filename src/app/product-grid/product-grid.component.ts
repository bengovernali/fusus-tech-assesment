import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Directive
} from "@angular/core";

import { ProductService } from "../product.service";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products;
  searchItems;

  //MatPaginatorInputs
  pageSize = 20;
  pageSizeOptions: number[] = [20, 50, 100];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onEnter(searchValue: string) {
    //empty products to clear the page
    this.products = [];
    //search for products that include search term
    this.products = this.productService.getSearch(searchValue);
  }
}
