import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { TopNavComponent } from "./top-nav/top-nav.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { MatButtonModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ProductGridComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ProductGridComponent },
      { path: "products/:productId", component: ProductDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
