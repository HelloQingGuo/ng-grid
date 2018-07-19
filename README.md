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

| breakpoint | Size                                                               | Type   | Default |
| ---------- | ------------------------------------------------------------------ | ------ | ------- |
| align      | the vertical alignment of the flex layout: `top` `middle` `bottom` | string | `top`   |

## Row

| Property | Description                              | Type   | Default |
| -------- | ---------------------------------------- | ------ | ------- |
| gutter   | spacing between grids, could be a number | number | 0       |

## Col

| Property | Description                                                                                     | Type           | Default |
| -------- | ----------------------------------------------------------------------------------------------- | -------------- | ------- |
| span     | number of cells to occupy                                                                       | number         | -       |
| xs       | `< 576px` and also default setting, could be a `span` value or an object containing above props | number\|object | -       |
| sm       | `≥ 576px`, could be a `span` value or an object containing above props                          | number         | -       |
| md       | `≥ 768px`, could be a `span` value or an object containing above props                          | number         | -       |
| lg       | `≥ 992px`, could be a `span` value or an object containing above props                          | number         | -       |
| xl       | `≥ 1200px`, could be a `span` value or an object containing above props                         | number         | -       |

## Example

```javascript
<ng-grid-row [gutter]="24">
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
