// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m214.938 143.156-5.532 17.125-28.062-8.844-15.219 45.75h-7.969v5.657h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H242v-5.657h-7.687l9-26.187-29.938-9.437 5.531-17.125zm-28.563 16.906 47.156 15.97-7.219 21.155h-14.156c-1.285-5.535-6.231-9.656-12.156-9.656-5.923 0-10.869 4.124-12.156 9.656h-13.719zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m16.28-89.573-11.163 33.535 26.21 8.725 11.164-33.534zm3.165 6.324 16.723 5.567-8.005 24.046-16.723-5.567z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Can buoy red cylindrical topmark";
const _description = "Can buoy red cylindrical topmark — INT 1 paper chart symbol";

export class ChartCanBuoyRedCylindricalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-can-buoy-red-cylindrical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
