import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';

@NgModule({
  declarations: [AppComponent, RowComponent, ColComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
