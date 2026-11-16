// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m182.563 85.734-6.157 18.344c-3.946.065-7.532 2.22-11.281 5.187-4 3.165-8.228 7.496-12.656 12.594-8.774 10.103-18.28 23.167-27.156 35.313h-7.157v5.656h29.688c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656H202v-5.656h-7.719c-1.276-11.328-2.185-23.373-4-33.094-.954-5.114-2.122-9.575-4-13.157-1.318-2.513-3.235-4.743-5.687-5.937l6-17.875zM160 152.484c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5M190.8 50.84c-9.357 0-17 7.644-17 17s7.643 17 17 17 17-7.643 17-17-7.643-17-17-17\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Conical buoy green spherical topmark";
const _description = "Conical buoy green spherical topmark — INT 1 paper chart symbol";

export class ChartConicalBuoyGreenSphericalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-conical-buoy-green-spherical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
