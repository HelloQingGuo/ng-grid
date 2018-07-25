import {
  Component,
  HostBinding,
  OnInit,
  Input,
  Renderer2,
  ElementRef
} from "@angular/core";
import { Gutter } from "../gutter";

@Component({
  selector: "ng-grid-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"]
})
export class RowComponent implements OnInit {
  private el: HTMLElement;
  @Input() public gutter: number | Gutter = 0;

  @HostBinding("style.marginRight.px")
  get marginRight(): number {
    if (typeof this.gutter === "number") {
      return -this.gutter / 2;
    }
    return 0;
    // TODO:
    // if (typeof this.row.gutter === 'object') {
    // }
  }

  @HostBinding("style.marginLeft.px")
  get marginLeft(): number {
    return this.marginRight;
  }

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.renderer.addClass(this.el, "ng-grid-row");
  }
}
