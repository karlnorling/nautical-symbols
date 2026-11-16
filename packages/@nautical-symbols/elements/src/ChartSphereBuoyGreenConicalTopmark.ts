// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m219.344 132.969-6.375 18.562a34 34 0 0 0-5.906-.906 34 34 0 0 0-2.438-.062A33.26 33.26 0 0 0 188 155.156c-14.661 8.625-20.342 26.812-13.812 42.063h-8.063v5.656h21.719c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656l32.281.031v-5.656l-8.593-.031c4.239-9.772 3.576-20.762-1.969-30.188a33.24 33.24 0 0 0-16.812-14.25l6.312-18.469zM200 192.53c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m5.613-68.031 29.162-29.125 6.125 40.912z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Sphere buoy green conical topmark";
const _description = "Sphere buoy green conical topmark — INT 1 paper chart symbol";

export class ChartSphereBuoyGreenConicalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-sphere-buoy-green-conical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
