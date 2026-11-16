// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m179.344 92.921-6.375 18.563a34 34 0 0 0-5.906-.906 34 34 0 0 0-2.438-.063A33.26 33.26 0 0 0 148 115.11c-14.661 8.624-20.342 26.812-13.812 42.063h-8.063v5.656h21.719c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l32.281.031v-5.656l-8.593-.031c4.239-9.772 3.576-20.762-1.969-30.188a33.24 33.24 0 0 0-16.812-14.25l6.312-18.469zm-13.969 24.532a26.45 26.45 0 0 1 22.469 13.094c5.045 8.576 5.072 18.063.125 26.625l-15.813-.032c-1.285-5.535-6.231-9.656-12.156-9.656-5.923 0-10.869 4.123-12.156 9.656H142c-7.21-12.6-2.985-28.619 9.563-36 4.345-2.556 9.125-3.751 13.812-3.687M160 152.484c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m27.581-94.488c-9.356 0-17 7.644-17 17s7.644 17 17 17 17-7.643 17-17-7.643-17-17-17m0 5c6.652 0 12 5.35 12 12 0 6.652-5.348 12-12 12-6.651 0-12-5.348-12-12 0-6.65 5.349-12 12-12\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Spherical buoy red spherical topmark";
const _description = "Spherical buoy red spherical topmark — INT 1 paper chart symbol";

export class ChartSphericalBuoyRedSphericalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-spherical-buoy-red-spherical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
