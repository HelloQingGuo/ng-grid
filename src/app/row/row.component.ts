import {
  Component,
  HostBinding,
  OnInit,
  Input,
  Renderer2,
  ElementRef,
  HostListener,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Gutter } from "../gutter";
import { MediaQueryMap } from "../mediaquery-map";

const mediaQueryMap: MediaQueryMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};

@Component({
  selector: "ng-grid-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit, OnChanges {
  private el: HTMLElement;
  private breakPoint: string;
  // set it to public, to be used in Col component
  _gutter: number;
  @Input() private gutter: number | Gutter;

  ngOnChanges() {
    console.log(this.gutter);
    this.updateGutter();
  }

  @HostBinding("style.marginRight.px")
  get marginRight(): number {
    return -this._gutter / 2;
  }

  @HostBinding("style.marginLeft.px")
  get marginLeft(): number {
    return this.marginRight;
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    public cd: ChangeDetectorRef
  ) {
    this.el = this.elementRef.nativeElement;
    this.cd.detach();
  }

  ngOnInit() {
    this.renderer.addClass(this.el, "ng-grid-row");
    this.watchMedia();
  }

  getActualGutter(): number {
    if (typeof this.gutter === "number") {
      return this.gutter;
    } else if (
      typeof this.gutter === "object" &&
      this.breakPoint &&
      this.gutter[this.breakPoint] !== undefined
    ) {
      return this.gutter[this.breakPoint];
    } else if (this.gutter.span) {
      return this.gutter.span;
    }
    return 0;
  }

  updateGutter(): void {
    this._gutter = this.getActualGutter();
  }

  @HostListener("window:resize", ["$event"])
  onWindowResize(e: UIEvent): void {
    this.watchMedia();
  }

  watchMedia(): void {
    Object.keys(mediaQueryMap).forEach(size => {
      const matchBelow = matchMedia(mediaQueryMap[size]).matches;
      if (matchBelow) {
        this.breakPoint = size;
      }
    });
    this.updateGutter();
  }
}
