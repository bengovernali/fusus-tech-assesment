import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Directive
} from "@angular/core";

import { ProductService } from "../product.service";

@Component({
  selector: "app-product-grid",
  templateUrl: "./product-grid.component.html",
  styleUrls: ["./product-grid.component.css"]
})
export class ProductGridComponent implements OnInit {
  products;

  //MatPaginatorInputs
  pageSize = 20;
  pageSizeOptions: number[] = [20, 50, 100];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  async onEnter(searchValue: string) {
    this.products = [];
    console.log(searchValue);
    await this.productService.getSearch(searchValue);
  }
}
