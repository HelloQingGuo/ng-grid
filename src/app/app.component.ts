import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  // gutter = {
  //   span: 16,
  //   xs: 8,
  //   md: 24
  // };
  // gutter: string = "8";
  gutter: number = 8;

  add() {
    this.gutter += 8;
  }
}
