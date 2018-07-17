import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ng-grid-col",
  templateUrl: "./col.component.html",
  styleUrls: ["./col.component.scss"]
})
export class ColComponent implements OnInit {
  @Input() span?: string;
  @Input() xs?: string;
  @Input() sm?: string;
  @Input() md?: string;
  @Input() lg?: string;
  @Input() xl?: string;

  classNames = "";
  constructor() {}

  ngOnInit() {
    this.classNames += this.span && `col-${this.span}`;
    this.classNames += this.xs && ` col-xs-${this.xs}`;
    this.classNames += this.sm && ` col-xs-${this.sm}`;
    this.classNames += this.md && ` col-xs-${this.md}`;
    this.classNames += this.lg && ` col-xs-${this.lg}`;
    this.classNames += this.xl && ` col-xs-${this.xl}`;
  }
}
