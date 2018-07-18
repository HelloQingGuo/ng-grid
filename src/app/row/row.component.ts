import { Component, OnInit, Input } from "@angular/core";
import { Gutter } from "../gutter";

@Component({
  selector: "ng-grid-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"]
})
export class RowComponent implements OnInit {
  @Input() public gutter: number | Gutter = 0;
  constructor() {}

  ngOnInit() {}
}
