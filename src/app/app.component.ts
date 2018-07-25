import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  gutter = 24;

  changeGutter() {
    console.log("change gutter", this.gutter);

    this.gutter += 8;
  }
}
