import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { TopNavComponent } from "./top-nav/top-nav.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";

import { MatButtonModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductGridComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ProductGridComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
