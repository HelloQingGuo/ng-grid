import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  gutter_1 = "8";

  gutter_2 = {
    span: 16,
    lg: 40,
    xl: 80
  };

  toNumber(val: string): number {
    return Number(val);
  }
}
