import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Host,
  ElementRef,
  Optional,
  Renderer2,
  ViewEncapsulation,
  OnChanges
} from "@angular/core";
import { RowComponent } from "../row/row.component";
import { isNotNil } from "../util/check";

@Component({
  selector: "ng-grid-col",
  templateUrl: "./col.component.html",
  styleUrls: ["./col.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ColComponent implements OnInit, OnChanges {
  private el: HTMLElement;
  private prefixClass = "ng-grid-col";

  @HostBinding("style.padding-left.px")
  get paddingLeft(): number {
    if (!isNotNil(this.row)) {
      return 0;
    }
    return this.row._gutter / 2;
  }

  @HostBinding("style.padding-right.px")
  get paddingRight(): number {
    return this.paddingLeft;
  }

  get row(): RowComponent {
    return this.rowComponent;
  }

  @Input() span?: number;
  @Input() xs?: number;
  @Input() sm?: number;
  @Input() md?: number;
  @Input() lg?: number;
  @Input() xl?: number;
  private classMap = {};

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Optional()
    @Host()
    private rowComponent: RowComponent
  ) {
    this.el = this.elementRef.nativeElement;
  }

  updateHostClass(classMap: object): void {
    Object.keys(this.classMap).forEach(prop => {
      if (this.classMap[prop]) {
        this.renderer.removeClass(this.el, prop);
      }
    });
    this.classMap = classMap;
    Object.keys(this.classMap).forEach(prop => {
      if (this.classMap[prop]) {
        this.renderer.addClass(this.el, prop);
      }
    });
  }

  generateClassMap(): void {
    const listOfSize = ["span", "xs", "sm", "md", "lg", "xl"];
    const classMap = {};
    listOfSize.forEach(size => {
      classMap[`${this.prefixClass}-${size}-${this[size]}`] = isNotNil(
        this[size]
      );
    });

    this.updateHostClass(classMap);
  }

  ngOnInit() {
    this.generateClassMap();
  }

  ngOnChanges() {
    this.generateClassMap();
  }
}
