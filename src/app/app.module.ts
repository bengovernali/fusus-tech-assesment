import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { TopNavComponent } from "./top-nav/top-nav.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";

import { MatButtonModule } from "@angular/material/";

@NgModule({
  declarations: [AppComponent, TopNavComponent, ProductGridComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([{ path: "", component: ProductGridComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
