import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RowComponent } from "./row/row.component";
import { ColComponent } from "./col/col.component";

@NgModule({
  declarations: [AppComponent, RowComponent, ColComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
