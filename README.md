# NgGrid

This is the implementation of responsive 24 grids system for angular application.

## Overview

In NgGrid, we layout the content based on `row` and `column`, to ensure that every area can have stable arrangement.

- Establish a set of `columns` in the horizontal space defined by a `row`
- Content elements should be placed inside `col`, and only `col` could be placed inside `row`
- The grid system uses value of 1 - 24 to represent its range. For example, three columns with same width can be created by `[span]="8"`).
- If the sum of `col` spans in a `row` are more than 24, the extra `col` as a whole will be placed in a new line.

## Responsive Breakpoints

These breakpoints are based on minimum viewport widths and allow us to scale elements as the viewport changes.

| Breakpoints | Description                                              |
| ----------- | -------------------------------------------------------- |
| xs          | Extra small devices (portrait phones, `less than 576px`) |
| sm          | Small devices (landscape phones, `576px and up`)         |
| md          | Medium devices (tablets, `768px and up`)                 |
| lg          | Large devices (desktops, `992px and up`)                 |
| xl          | Extra large devices (large desktops, `1200px and up`)    |

## Row

| Property | Description                                                                                                                               | Type             | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------- |
| gutter   | space between two grids, recommend `8n` px. n is a non-negative interger, or an object { span: 8, xs: 8, sm: 16, md: 24, lg: 32, xl: 32 } | number \| object | 0       |

## Col

| Property | Description                                                      | Type   | Default |
| -------- | ---------------------------------------------------------------- | ------ | ------- |
| span     | number of grids to occupy, `[1, 24]`                             | number | -       |
| xs       | number of grids to occupy, `[1, 24]` when viewport is `< 576px`  | number | -       |
| sm       | number of grids to occupy, `[1, 24]` when viewport is `≥ 576px`  | number | -       |
| md       | number of grids to occupy, `[1, 24]` when viewport is `≥ 768px`  | number | -       |
| lg       | number of grids to occupy, `[1, 24]` when viewport is `≥ 992px`  | number | -       |
| xl       | number of grids to occupy, `[1, 24]` when viewport is `≥ 1200px` | number | -       |

## Example

    Gutter:
    It will be `24px` when the screen size is `md`, 32px when it is `lg` or `xl`, 8px when it is `xs` and `sm`.

```javascript
<ng-grid-row [gutter]={span: 8, md: 24, lg: 32}>
    <ng-grid-col [md]="16" [sm]="24">
        <div class="content">
           Your content goes here
        </div>
    </ng-grid-col>
    <ng-grid-col [md]="8" [sm]="12">
        <div class="content">
           Your content goes here
        </div>
    </ng-grid-col>
    <ng-grid-col [md]="8" [sm]="12">
        <div class="content">
           Your content goes here
        </div>
    </ng-grid-col>
    <ng-grid-col [md]="8" [sm]="12">
        <div class="content">
           Your content goes here
        </div>
    </ng-grid-col>
    <ng-grid-col [md]="8" [sm]="12">
        <div class="content">
           Your content goes here
        </div>
    </ng-grid-col>
</ng-grid-row>
```
