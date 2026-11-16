// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"",
  body: "<path d=\"m237.406 80.5-5.937 18.125-4.25-1.406-30.094 90.625a12.57 12.57 0 0 0-9.281 9.344h-8.438l-.125 5.656h8.563c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l8.325-.044v-5.656l-8.325.043a12.55 12.55 0 0 0-2.906-5.593l30-90.469-3.75-1.187 6.281-17.97zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5M246.887 8.925l4.782 35.969 25.812-25.719zm3.657 39.344-25.782 25.75 30.907 10.343z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "400",
  width: "400",
};
const _title = "Cardinal mark spar west";
const _description = "Cardinal mark spar west — INT 1 paper chart symbol";

export class ChartCardinalMarkSparWest extends SymbolElement {
  static readonly tagName = 'nautical-chart-cardinal-mark-spar-west';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
