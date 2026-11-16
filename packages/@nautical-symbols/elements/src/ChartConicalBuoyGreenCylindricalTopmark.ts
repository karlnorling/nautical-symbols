// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m222.563 125.75-6.157 18.344c-3.946.065-7.532 2.22-11.281 5.187-4 3.165-8.228 7.496-12.656 12.594-8.774 10.103-18.28 23.167-27.156 35.313h-7.157v5.656h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H242v-5.657h-7.719c-1.276-11.327-2.185-23.372-4-33.093-.954-5.114-2.122-9.575-4-13.156-1.318-2.514-3.235-4.744-5.687-5.938l6-17.875zM200 192.5c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5m23.905-106.979-11.163 33.534 26.21 8.726 11.164-33.534z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Conical buoy green cylindrical topmark";
const _description = "Conical buoy green cylindrical topmark — INT 1 paper chart symbol";

export class ChartConicalBuoyGreenCylindricalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-conical-buoy-green-cylindrical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
