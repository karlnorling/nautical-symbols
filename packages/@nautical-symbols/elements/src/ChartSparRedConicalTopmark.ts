// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m237.406 80.5-5.937 18.125-4.25-1.406-30.094 90.625a12.57 12.57 0 0 0-9.281 9.344h-8.438l-.125 5.656h8.563c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l8.325-.044v-5.656l-8.325.043a12.55 12.55 0 0 0-2.906-5.593l30-90.469-3.75-1.187 6.281-17.97zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m57.275-108.269-5.362-40.625-29.063 29.388zm-6.15-6.987-19.575-7.175 16.75-16.65z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Spar red conical topmark";
const _description = "Spar red conical topmark — INT 1 paper chart symbol";

export class ChartSparRedConicalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-spar-red-conical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
